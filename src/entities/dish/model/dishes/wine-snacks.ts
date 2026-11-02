import cheeseGrapes from '../../assets/wine-snacks/cheese-grapes.jpg'
import jamon from '../../assets/wine-snacks/jamon.jpg'
import olives from '../../assets/wine-snacks/olives.jpg'
import type { Dish } from '../types'

export const wineSnacksDishes: Dish[] = [
    {
        id: 'jamon',
        title: 'Хамон',
        category: 'wine-snacks',
        price: 790,
        weight: 80,
        image: jamon,
    },
    {
        id: 'olives',
        title: 'Маринованные оливки',
        category: 'wine-snacks',
        price: 290,
        weight: 150,
        image: olives,
    },
    {
        id: 'cheese-grapes',
        title: 'Сыр с виноградом',
        category: 'wine-snacks',
        price: 520,
        weight: 150,
        image: cheeseGrapes,
    },
]
