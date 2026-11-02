import type { ComponentProps } from 'react'
import { Button } from '@/shared/ui'
import { useBooking } from '../model/bookingContext'

type BookTableButtonProps = Omit<ComponentProps<typeof Button>, 'onClick'> & {
    /** вызывается сразу после открытия окна, например чтобы закрыть меню */
    onOpen?: () => void
}

export function BookTableButton({
    onOpen,
    children = 'Бронь столика',
    ...props
}: BookTableButtonProps) {
    const { open } = useBooking()

    const handleClick = () => {
        open()
        onOpen?.()
    }

    return (
        <Button onClick={handleClick} {...props}>
            {children}
        </Button>
    )
}
