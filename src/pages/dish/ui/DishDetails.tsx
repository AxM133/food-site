import { useState } from 'react'
import { calcDishTotal, type Dish } from '@/entities/dish'
import { formatPrice } from '@/shared/lib/formatPrice'
import { Button, Checkbox, ImageGallery, QuantityInput } from '@/shared/ui'

type DishDetailsProps = {
    dish: Dish
}

export function DishDetails({ dish }: DishDetailsProps) {
    const [quantity, setQuantity] = useState(1)
    const [addonIds, setAddonIds] = useState<string[]>([])

    const toggleAddon = (id: string) => {
        setAddonIds((current) =>
            current.includes(id)
                ? current.filter((addonId) => addonId !== id)
                : [...current, id],
        )
    }

    const total = calcDishTotal(dish, addonIds, quantity)

    return (
        <div className="mt-16 grid gap-10 lg:ml-56 lg:max-w-213 lg:grid-cols-[416px_1fr] lg:gap-x-32">
            <ImageGallery images={dish.gallery ?? [dish.image]} alt={dish.title} />

            <div>
                <h1 className="text-[28px] leading-tight font-semibold text-dark">
                    {dish.title}
                </h1>

                <div className="mt-8 border-t border-line pt-8">
                    <p className="flex items-baseline gap-3 text-dark">
                        <span className="text-4xl font-semibold">
                            {formatPrice(dish.price)}
                        </span>
                        {dish.weight !== undefined && (
                            <span className="text-sm text-graphite">
                                / {dish.weight} грамм
                            </span>
                        )}
                    </p>

                    <p className="mt-8 text-sm font-semibold text-dark">
                        Количество порций:
                    </p>
                    <div className="mt-4 flex items-center gap-5">
                        <QuantityInput value={quantity} onChange={setQuantity} />
                        <Button size="md">В корзину</Button>
                    </div>

                    <p className="mt-4 text-sm text-graphite">
                        Итого:{' '}
                        <span className="font-semibold text-dark">
                            {formatPrice(total)}
                        </span>
                    </p>
                </div>

                {dish.addons && dish.addons.length > 0 && (
                    <div className="mt-10 border-t border-line pt-10">
                        <h2 className="text-[28px] leading-tight font-semibold text-dark">
                            Сделать еще вкуснее
                        </h2>

                        <ul className="mt-6 space-y-6">
                            {dish.addons.map((addon) => (
                                <li key={addon.id}>
                                    <label className="flex cursor-pointer items-center justify-between gap-4">
                                        <span>
                                            <span className="block text-sm text-graphite">
                                                {addon.name}
                                            </span>
                                            <span className="mt-1 block font-semibold text-dark">
                                                {formatPrice(addon.price)}
                                            </span>
                                        </span>
                                        <Checkbox
                                            checked={addonIds.includes(addon.id)}
                                            onChange={() => toggleAddon(addon.id)}
                                        />
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
