import beefCarpaccio from '../../assets/raw/beef-carpaccio.jpg'
import ceviche from '../../assets/raw/ceviche.jpg'
import tunaTartare from '../../assets/raw/tuna-tartare.jpg'
import type { Dish } from '../types'

export const rawDishes: Dish[] = [
    {
        id: 'tuna-tartare',
        title: 'Тартар из тунца с авокадо',
        category: 'raw',
        price: 690,
        weight: 150,
        image: tunaTartare,
    },
    {
        id: 'ceviche',
        title: 'Севиче из белой рыбы',
        category: 'raw',
        price: 590,
        weight: 180,
        image: ceviche,
    },
    {
        id: 'beef-carpaccio',
        title: 'Карпаччо из говядины',
        category: 'raw',
        price: 650,
        weight: 120,
        image: beefCarpaccio,
    },
]
