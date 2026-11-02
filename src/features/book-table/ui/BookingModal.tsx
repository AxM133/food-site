import { useState, type ChangeEvent, type ComponentProps, type FormEvent } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useOverlay } from '@/shared/lib/useOverlay'
import { Button, Input, Logo } from '@/shared/ui'
import { submitBooking } from '../api/submitBooking'
import { formatPhone } from '../lib/phone'
import { formatTime } from '../lib/formatTime'
import type { BookingErrors, BookingFormValues } from '../model/types'
import { validateBooking } from '../model/validate'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const initialValues: BookingFormValues = {
    name: '',
    phone: '',
    guests: '',
    time: '',
}

// Поля, значение которых форматируется на лету
const formatters: Partial<Record<keyof BookingFormValues, (value: string) => string>> = {
    phone: formatPhone,
    time: formatTime,
}

type FieldProps = ComponentProps<typeof Input> & {
    error?: string
}

function Field({ error, className, ...props }: FieldProps) {
    return (
        <div className={className}>
            <Input aria-invalid={Boolean(error)} {...props} />
            {error && <p className='mt-1 text-xs text-red-400'>{error}</p>}
        </div>
    )
}

type BookingModalProps = {
    onClose: () => void
}

export function BookingModal({ onClose }: BookingModalProps) {
    const [values, setValues] = useState<BookingFormValues>(initialValues)
    const [errors, setErrors] = useState<BookingErrors>({})
    const [status, setStatus] = useState<FormStatus>('idle')

    useOverlay(onClose)

    const handleChange =
        (field: keyof BookingFormValues) =>
        (event: ChangeEvent<HTMLInputElement>) => {
            const value = formatters[field]?.(event.target.value) ?? event.target.value

            setValues((current) => ({ ...current, [field]: value }))
            setErrors((current) => ({ ...current, [field]: undefined }))
        }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const nextErrors = validateBooking(values)
        setErrors(nextErrors)
        if (Object.keys(nextErrors).length > 0) return

        setStatus('submitting')
        try {
            await submitBooking(values)
            setStatus('success')
        } catch {
            setStatus('error')
        }
    }

    return (
        <div
            role='dialog'
            aria-modal='true'
            aria-labelledby='booking-title'
            className='fixed inset-0 z-40 flex items-center justify-center overflow-y-auto bg-black/70 p-4'
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose()
            }}
        >
            <div className='relative my-auto w-full max-w-104 bg-dark px-8 py-12 text-white sm:px-14'>
                <button
                    type='button'
                    aria-label='Закрыть'
                    onClick={onClose}
                    className='absolute top-6 right-6 cursor-pointer text-gold transition-opacity hover:opacity-70'
                >
                    <FaTimes size={24} />
                </button>

                <div className='flex justify-center'>
                    <Logo className='text-4xl' />
                </div>

                {status === 'success' ? (
                    <div className='mt-8 text-center'>
                        <h2 id='booking-title' className='text-xl font-semibold uppercase'>
                            Спасибо!
                        </h2>
                        <p className='mt-6 leading-relaxed'>
                            {values.name.trim()}, мы перезвоним по номеру {values.phone},
                            чтобы подтвердить стол на {values.time}. Гостей: {values.guests}.
                        </p>
                        <Button className='mt-8' onClick={onClose}>
                            Закрыть
                        </Button>
                    </div>
                ) : (
                    <>
                        <h2
                            id='booking-title'
                            className='mt-8 text-center text-xl font-semibold tracking-wide uppercase'
                        >
                            Забронировать столик
                        </h2>

                        <form noValidate onSubmit={handleSubmit} className='mt-8 space-y-4'>
                            <Field
                                autoFocus
                                placeholder='Имя'
                                autoComplete='name'
                                value={values.name}
                                onChange={handleChange('name')}
                                error={errors.name}
                            />
                            <Field
                                type='tel'
                                inputMode='tel'
                                placeholder='Телефон'
                                autoComplete='tel'
                                value={values.phone}
                                onChange={handleChange('phone')}
                                // на фокусе сразу ставим +7, а если ничего не ввели, убираем
                                onFocus={() =>
                                    setValues((current) =>
                                        current.phone === '' ? { ...current, phone: '+7' } : current,
                                    )
                                }
                                onBlur={() =>
                                    setValues((current) =>
                                        current.phone === '+7' ? { ...current, phone: '' } : current,
                                    )
                                }
                                error={errors.phone}
                            />

                            <div className='grid grid-cols-2 gap-6'>
                                <Field
                                    type='number'
                                    min={1}
                                    max={20}
                                    placeholder='Гостей'
                                    value={values.guests}
                                    onChange={handleChange('guests')}
                                    error={errors.guests}
                                />
                                <Field
                                    inputMode='numeric'
                                    placeholder='Время'
                                    value={values.time}
                                    onChange={handleChange('time')}
                                    error={errors.time}
                                />
                            </div>

                            {status === 'error' && (
                                <p className='text-center text-sm text-red-400'>
                                    Не удалось отправить. Попробуйте ещё раз
                                </p>
                            )}

                            <div className='pt-4 text-center'>
                                <Button
                                    type='submit'
                                    size='md'
                                    disabled={status === 'submitting'}
                                    className='disabled:cursor-default disabled:opacity-60'
                                >
                                    {status === 'submitting' ? 'Отправляем…' : 'Забронировать'}
                                </Button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}
