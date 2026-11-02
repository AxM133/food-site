import chickenSkewers from '../../assets/mangal/chicken-skewers.jpg'
import lambShashlik from '../../assets/mangal/lamb-shashlik.jpg'
import lulaKebab from '../../assets/mangal/lula-kebab.jpg'
import type { Dish } from '../types'

export const mangalDishes: Dish[] = [
    {
        id: 'lamb-shashlik',
        title: 'Шашлык из баранины',
        category: 'mangal',
        price: 750,
        weight: 200,
        image: lambShashlik,
    },
    {
        id: 'chicken-skewers',
        title: 'Шашлык из курицы',
        category: 'mangal',
        price: 450,
        weight: 200,
        image: chickenSkewers,
    },
    {
        id: 'lula-kebab',
        title: 'Люля-кебаб на лепёшке',
        category: 'mangal',
        price: 520,
        weight: 220,
        image: lulaKebab,
    },
]
