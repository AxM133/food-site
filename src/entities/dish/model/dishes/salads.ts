import caesar from '../../assets/salads/caesar.jpg'
import caprese from '../../assets/salads/caprese.jpg'
import greek from '../../assets/salads/greek.jpg'
import type { Dish } from '../types'

export const saladsDishes: Dish[] = [
    {
        id: 'caesar',
        title: 'Цезарь с курицей',
        category: 'salads',
        price: 490,
        weight: 250,
        image: caesar,
    },
    {
        id: 'greek',
        title: 'Греческий салат',
        category: 'salads',
        price: 450,
        weight: 250,
        image: greek,
    },
    {
        id: 'caprese',
        title: 'Капрезе',
        category: 'salads',
        price: 520,
        weight: 200,
        image: caprese,
    },
]
