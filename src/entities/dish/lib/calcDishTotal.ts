import type { Dish } from '../model/types'

export function calcDishTotal(
    dish: Dish,
    addonIds: string[],
    quantity: number,
) {
    const addonsPrice = (dish.addons ?? [])
        .filter((addon) => addonIds.includes(addon.id))
        .reduce((sum, addon) => sum + addon.price, 0)

    return (dish.price + addonsPrice) * quantity
}
