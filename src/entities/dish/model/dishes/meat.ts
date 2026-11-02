import duckBreast from '../../assets/meat/duck-breast.jpg'
import ribeye from '../../assets/meat/ribeye.jpg'
import stroganoff from '../../assets/meat/stroganoff.jpg'
import type { Dish } from '../types'

export const meatDishes: Dish[] = [
    {
        id: 'ribeye',
        title: 'Стейк рибай',
        category: 'meat',
        price: 1890,
        weight: 300,
        image: ribeye,
    },
    {
        id: 'stroganoff',
        title: 'Бефстроганов с рисом',
        category: 'meat',
        price: 690,
        weight: 320,
        image: stroganoff,
    },
    {
        id: 'duck-breast',
        title: 'Утиная грудка с соусом',
        category: 'meat',
        price: 990,
        weight: 250,
        image: duckBreast,
    },
]
