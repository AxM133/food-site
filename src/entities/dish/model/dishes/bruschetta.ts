import mushroomBruschetta from '../../assets/bruschetta/mushroom-bruschetta.jpg'
import salmonBruschetta from '../../assets/bruschetta/salmon-bruschetta.jpg'
import tomatoBruschetta from '../../assets/bruschetta/tomato-bruschetta.jpg'
import type { Dish } from '../types'

export const bruschettaDishes: Dish[] = [
    {
        id: 'tomato-bruschetta',
        title: 'Брускетта с томатами и базиликом',
        category: 'bruschetta',
        price: 350,
        weight: 140,
        image: tomatoBruschetta,
    },
    {
        id: 'salmon-bruschetta',
        title: 'Брускетта с лососем',
        category: 'bruschetta',
        price: 490,
        weight: 150,
        image: salmonBruschetta,
    },
    {
        id: 'mushroom-bruschetta',
        title: 'Брускетта с грибами',
        category: 'bruschetta',
        price: 390,
        weight: 140,
        image: mushroomBruschetta,
    },
]
