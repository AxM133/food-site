import burger from '../../assets/grill/burger.jpg'
import grilledVegetables from '../../assets/grill/grilled-vegetables.jpg'
import ribs from '../../assets/grill/ribs.jpg'
import type { Dish } from '../types'

export const grillDishes: Dish[] = [
    {
        id: 'ribs',
        title: 'Свиные рёбра BBQ',
        category: 'grill',
        price: 890,
        weight: 400,
        image: ribs,
    },
    {
        id: 'burger',
        title: 'Бургер с говяжьей котлетой',
        category: 'grill',
        price: 590,
        weight: 320,
        image: burger,
    },
    {
        id: 'grilled-vegetables',
        title: 'Овощи гриль',
        category: 'grill',
        price: 420,
        weight: 250,
        image: grilledVegetables,
    },
]
