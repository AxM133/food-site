import benedictBacon from '../../assets/breakfast/benedict-bacon.jpg'
import benedictSalmon from '../../assets/breakfast/benedict-salmon.jpg'
import buckwheat from '../../assets/breakfast/buckwheat.jpg'
import cobbShrimp from '../../assets/breakfast/cobb-shrimp.jpg'
import friedEggs from '../../assets/breakfast/fried-eggs.jpg'
import friedEggsLarge from '../../assets/breakfast/fried-eggs-large.jpg'
import omelette from '../../assets/breakfast/omelette.jpg'
import pancakes from '../../assets/breakfast/pancakes.jpg'
import placeholder from '../../assets/placeholder.svg'
import porridge from '../../assets/breakfast/porridge.jpg'
import syrniki from '../../assets/breakfast/syrniki.jpg'
import type { Dish, DishAddon } from '../types'

// Блок «Сделать еще вкуснее» из дизайна. Подходит к солёным блюдам
const savoryAddons: DishAddon[] = [
    { id: 'shrimp', name: 'Тигровые креветки 60 г', price: 450 },
    { id: 'tomato', name: 'Томаты / паприка', price: 80 },
    { id: 'bacon', name: 'Бекон', price: 120 },
    { id: 'cheddar', name: 'Сыр чеддер 30 г', price: 80 },
]

export const breakfastDishes: Dish[] = [
    {
        id: 'fried-eggs',
        title: 'Яичница-глазунья из трех яиц',
        category: 'breakfast',
        price: 250,
        weight: 400,
        image: friedEggs,
        gallery: [friedEggsLarge, friedEggsLarge, friedEggsLarge],
        addons: savoryAddons,
    },
    {
        id: 'omelette',
        title: 'Омлет из трёх яиц',
        category: 'breakfast',
        price: 250,
        image: omelette,
        addons: savoryAddons,
    },
    {
        id: 'syrniki',
        title: 'Домашние сырники',
        category: 'breakfast',
        price: 490,
        image: syrniki,
    },
    {
        id: 'pancakes',
        title: 'Блины',
        category: 'breakfast',
        price: 190,
        priceFrom: true,
        image: pancakes,
    },
    {
        id: 'porridge',
        title: 'Каша с ягодами и кедровыми орехами',
        category: 'breakfast',
        price: 450,
        image: porridge,
    },
    {
        id: 'scramble',
        title: 'Скрэмбл',
        category: 'breakfast',
        price: 290,
        // В макете нет подходящего фото. Заменить, когда появится
        image: placeholder,
        addons: savoryAddons,
    },
    {
        id: 'benedict-salmon',
        title: 'Яйцо Бенедикт с лососем',
        category: 'breakfast',
        price: 850,
        image: benedictSalmon,
        addons: savoryAddons,
    },
    {
        id: 'benedict-bacon',
        title: 'Яйцо Бенедикт с беконом',
        category: 'breakfast',
        price: 650,
        image: benedictBacon,
        addons: savoryAddons,
    },
    {
        id: 'buckwheat',
        title: 'Гречневая каша с авокадо, яйцом пашот и пармезаном',
        category: 'breakfast',
        price: 490,
        image: buckwheat,
        addons: savoryAddons,
    },
    {
        id: 'cobb-salmon',
        title: 'Кобб – салат с лососем',
        category: 'breakfast',
        price: 890,
        // В макете нет подходящего фото. Заменить, когда появится
        image: placeholder,
        addons: savoryAddons,
    },
    {
        id: 'cobb-shrimp',
        title: 'Кобб – салат с креветками',
        category: 'breakfast',
        price: 960,
        image: cobbShrimp,
        addons: savoryAddons,
    },
]
