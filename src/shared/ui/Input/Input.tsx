import type { ComponentProps } from "react";
import { cn } from '@/shared/lib/cn'

export function Input({ className, ...props }: ComponentProps<'input'>) {
    return (
        <input
            className={cn(
                'w-full border border-white/40 bg-transparent px-5 py-3.5 text-white outline-none',
                'placeholder:text-white/80 focus:border-gold aria-invalid:border-red-400',
                className,
            )}
            {...props}
        />
    )
}