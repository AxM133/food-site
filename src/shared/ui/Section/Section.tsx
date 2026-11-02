import type { ReactNode } from "react";
import { Container } from "../Container/Container";
import { SectionTitle } from "../SectionTitle/SectionTitle";

type SectionProps = {
    id?: string
    label: string
    heading: string
    children: ReactNode
    extra?: ReactNode
}

export function Section({ id, label, heading, children, extra }: SectionProps) {
    return (
        <section id={id} className="py-16">
            <Container>
                <SectionTitle>{label}</SectionTitle>

                <div className="mt-20 lg:ml-w-213">
                    <div className="grid gap-8 lg:grid-cols-[327px_1fr]">
                        <h3 className="max-w-65 text-5xl leading-tight font-semibold text-dark">
                            {heading}
                        </h3>
                        <div className="space-y-4 text-[15px] leading-relaxed text-dark">
                            {children}
                        </div>
                    </div>

                    {extra && <div className="mt-20">{extra}</div>}
                </div>
            </Container>
        </section>
    )
}