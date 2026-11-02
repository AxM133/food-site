import type { ReactNode } from 'react'
import { formatPrice } from '@/shared/lib/formatPrice'
import type { Dish } from '../model/types'

type DishCardProps = {
    dish: Dish
    action?: ReactNode
}

export function DishCard({ dish, action }: DishCardProps) {
    const { title, price, priceFrom, image } = dish

    return (
        <article className="flex h-full flex-col border border-line bg-white">
            <img
                src={image}
                alt={title}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
            />

            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-center leading-snug font-semibold text-dark">
                    {title}
                </h3>

                <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                    <p className="text-[28px] font-semibold text-dark">
                        {priceFrom && 'от '}
                        {formatPrice(price)}
                    </p>
                    {action}
                </div>
            </div>
        </article>
    )
}
