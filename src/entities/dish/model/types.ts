import type { CategoryId } from './categories'

export type DishAddon = {
    id: string
    name: string
    price: number
}

export type Dish = {
    id: string
    title: string
    category: CategoryId
    price: number
    /** true: на карточке будет «от 190 ₽» */
    priceFrom?: boolean
    /** вес порции в граммах */
    weight?: number
    image: string
    gallery?: string[]
    addons?: DishAddon[]
}
