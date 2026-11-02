import charcuterie from '../../assets/cold-starters/charcuterie.jpg'
import cheesePlatter from '../../assets/cold-starters/cheese-platter.jpg'
import herring from '../../assets/cold-starters/herring.jpg'
import type { Dish } from '../types'

export const coldStartersDishes: Dish[] = [
    {
        id: 'cheese-platter',
        title: 'Сырная тарелка',
        category: 'cold-starters',
        price: 890,
        weight: 250,
        image: cheesePlatter,
    },
    {
        id: 'charcuterie',
        title: 'Мясное ассорти',
        category: 'cold-starters',
        price: 950,
        weight: 300,
        image: charcuterie,
    },
    {
        id: 'herring',
        title: 'Сельдь с горячим картофелем',
        category: 'cold-starters',
        price: 390,
        weight: 220,
        image: herring,
    },
]
