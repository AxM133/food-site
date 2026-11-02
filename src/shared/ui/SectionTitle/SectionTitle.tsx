import type { ReactNode } from "react";

type SectionTitleProps = {
    children: ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
    return (
        <div className="flex items-center gap-6">
            <h2 className="text-lg uppercase tracking-wide text-dark">{children}</h2>
            <span className="h-px w-14 bg-gold" />
        </div>
    )
}