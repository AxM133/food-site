import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib/cn'

type CheckboxProps = Omit<ComponentProps<'input'>, 'type'>

export function Checkbox({ className, ...props }: CheckboxProps) {
    return (
        <input
            type="checkbox"
            className={cn(
                'size-6 shrink-0 cursor-pointer appearance-none border border-line bg-white transition-colors checked:border-gold checked:bg-gold',
                className,
            )}
            {...props}
        />
    )
}
