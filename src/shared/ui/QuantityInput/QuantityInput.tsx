import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

type QuantityInputProps = {
    value: number
    onChange: (value: number) => void
    min?: number
    max?: number
}

export function QuantityInput({ value, onChange, min = 1, max = 99, }: QuantityInputProps) {
    return (
        <div className="flex h-14 w-21 items-center justify-between border border-line px-4">
            <span className="text-lg text-dark" aria-live="polite">
                {value}
            </span>

            <div className="flex flex-col text-gold">
                <button
                    type="button"
                    aria-label="Увеличить"
                    disabled={value >= max}
                    onClick={() => onChange(value + 1)}
                    className="cursor-pointer disabled:cursor-default disabled:opacity-30"
                >
                    <FaCaretUp />
                </button>

                <button
                    type="button"
                    aria-label="Уменьшить"
                    disabled={value <= min}
                    onClick={() => onChange(value - 1)}
                    className="cursor-pointer disabled:cursor-default disabled:opacity-30"
                >
                    <FaCaretDown />
                </button>
            </div>
        </div>
    )
}
