import salmonFillet from '../../assets/fish/salmon-fillet.jpg'
import seaBream from '../../assets/fish/sea-bream.jpg'
import trout from '../../assets/fish/trout.jpg'
import type { Dish } from '../types'

export const fishDishes: Dish[] = [
    {
        id: 'salmon-fillet',
        title: 'Стейк из лосося на гриле',
        category: 'fish',
        price: 1090,
        weight: 250,
        image: salmonFillet,
    },
    {
        id: 'sea-bream',
        title: 'Дорадо на гриле',
        category: 'fish',
        price: 980,
        weight: 400,
        image: seaBream,
    },
    {
        id: 'trout',
        title: 'Форель с картофелем',
        category: 'fish',
        price: 790,
        weight: 300,
        image: trout,
    },
]
