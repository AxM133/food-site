import fries from '../../assets/sides/fries.jpg'
import mashedPotatoes from '../../assets/sides/mashed-potatoes.jpg'
import roastedVegetables from '../../assets/sides/roasted-vegetables.jpg'
import type { Dish } from '../types'

export const sidesDishes: Dish[] = [
    {
        id: 'fries',
        title: 'Картофель фри',
        category: 'sides',
        price: 220,
        weight: 150,
        image: fries,
    },
    {
        id: 'mashed-potatoes',
        title: 'Картофельное пюре',
        category: 'sides',
        price: 220,
        weight: 150,
        image: mashedPotatoes,
    },
    {
        id: 'roasted-vegetables',
        title: 'Запечённые овощи',
        category: 'sides',
        price: 280,
        weight: 200,
        image: roastedVegetables,
    },
]
