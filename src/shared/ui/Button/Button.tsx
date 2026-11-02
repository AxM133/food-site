import type { ComponentProps } from "react";
import { cn } from '@/shared/lib/cn'

type Variant = 'primary' | 'outline' | 'outline-light'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = ComponentProps<'button'> & {
    variant?: Variant
    size?: Size
}

const variantClasses: Record<Variant, string> = {
    primary: 'bg-gold text-white hover:bg-gold/85',
    outline: 'border border-line bg-white text-dark hover:border-gold',
    "outline-light": 'border border-white text-white hover:bg-white/10',
}

const sizeClasses: Record<Size, string> = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-4 text-lg',
    lg: 'px-10 py-5 text-xl',
}

export function Button({
    variant = 'primary',
    size = 'sm',
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            type="button"
            className={cn(
                'cursor-pointer font-semibold transition-colors',
                variantClasses[variant],
                sizeClasses[size],
                className,
            )}
            {...props}
        />
    )
}