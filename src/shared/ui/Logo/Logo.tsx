import { cn } from "@/shared/lib/cn";
import logoUrl from '@/shared/assets/logo.svg'

type LogoProps = {
    className?: string
}

export function Logo({ className }: LogoProps) {
    return (
        <span
            className={cn(
                'inline-block font-black uppercase leading-none tracking-tight text-gold',
                className,
            )}
        >
            <img src={logoUrl} alt="Food" />
        </span>
    )
}