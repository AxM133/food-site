import bolognese from '../../assets/pasta-risotto/bolognese.jpg'
import carbonara from '../../assets/pasta-risotto/carbonara.jpg'
import mushroomRisotto from '../../assets/pasta-risotto/mushroom-risotto.jpg'
import type { Dish } from '../types'

export const pastaRisottoDishes: Dish[] = [
    {
        id: 'carbonara',
        title: 'Паста карбонара',
        category: 'pasta-risotto',
        price: 520,
        weight: 300,
        image: carbonara,
    },
    {
        id: 'bolognese',
        title: 'Спагетти болоньезе',
        category: 'pasta-risotto',
        price: 490,
        weight: 320,
        image: bolognese,
    },
    {
        id: 'mushroom-risotto',
        title: 'Ризотто с грибами',
        category: 'pasta-risotto',
        price: 560,
        weight: 300,
        image: mushroomRisotto,
    },
]
