export type MenuCardProps = {
    title: string
    image: string
    to: string
}

export function MenuCard({ title, image, to }: MenuCardProps) {
    return (
        <a href={to} className="group block">
            <div className="border border-line px-10 pt-10">
                <img
                    src={image}
                    alt={title}
                    className="-mb-10 aspect-4/3 w-full object-cover"
                />
            </div>

            <div className="mt-16 flex items-center justify-center gap-5">
                <span className="text-sm font-semibold tracking-wide text-dark uppercase transition-colors group-hover:text-gold">
                    {title}
                </span>
                <span className="h-px w-14 bg-gold" />
            </div>
        </a>
    )
}