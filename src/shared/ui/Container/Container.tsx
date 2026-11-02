import type { ComponentProps } from "react";
import { cn } from "@/shared/lib/cn";

export function Container({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            className={cn(
                'mx-auto w-full max-w-336 px-6 pl-36 min-[1700px]:pl-6',
                className,
            )}
            {...props}
        />
    )
}