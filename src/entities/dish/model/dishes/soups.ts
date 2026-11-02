import borscht from '../../assets/soups/borscht.jpg'
import pumpkinSoup from '../../assets/soups/pumpkin-soup.jpg'
import tomYum from '../../assets/soups/tom-yum.jpg'
import type { Dish } from '../types'

export const soupsDishes: Dish[] = [
    {
        id: 'borscht',
        title: 'Борщ со сметаной',
        category: 'soups',
        price: 390,
        weight: 350,
        image: borscht,
    },
    {
        id: 'tom-yum',
        title: 'Том ям с креветками',
        category: 'soups',
        price: 590,
        weight: 400,
        image: tomYum,
    },
    {
        id: 'pumpkin-soup',
        title: 'Крем-суп из тыквы',
        category: 'soups',
        price: 350,
        weight: 300,
        image: pumpkinSoup,
    },
]
