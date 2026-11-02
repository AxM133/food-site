import type { Dish } from './types'

// Временные картинки, потом заменим на файлы из Figma
const img = (seed: string) => `https://picsum.photos/seed/${seed}/600/450`

export const dishes: Dish[] = [
    {
        id: 'fried-eggs',
        title: 'Яичница-глазунья из трех яиц',
        category: 'breakfast',
        price: 250,
        weight: 400,
        image: img('fried-eggs'),
        gallery: [img('fried-eggs-1'), img('fried-eggs-2'), img('fried-eggs-3')],
        addons: [
            { id: 'shrimp', name: 'Тигровые креветки 60 г', price: 450 },
            { id: 'tomato', name: 'Томаты / паприка', price: 80 },
            { id: 'bacon', name: 'Бекон', price: 120 },
            { id: 'cheddar', name: 'Сыр чеддер 30 г', price: 80 },
        ],
    },
    {
        id: 'omelette',
        title: 'Омлет из трёх яиц',
        category: 'breakfast',
        price: 250,
        image: img('omelette'),
    },
    {
        id: 'syrniki',
        title: 'Домашние сырники',
        category: 'breakfast',
        price: 490,
        image: img('syrniki'),
    },
    {
        id: 'pancakes',
        title: 'Блины',
        category: 'breakfast',
        price: 190,
        priceFrom: true,
        image: img('pancakes'),
    },
    {
        id: 'porridge',
        title: 'Каша с ягодами и кедровыми орехами',
        category: 'breakfast',
        price: 450,
        image: img('porridge'),
    },
    {
        id: 'scramble',
        title: 'Скрэмбл',
        category: 'breakfast',
        price: 290,
        image: img('scramble'),
    },
    {
        id: 'benedict-salmon',
        title: 'Яйцо Бенедикт с лососем',
        category: 'breakfast',
        price: 850,
        image: img('benedict-salmon'),
    },
    {
        id: 'benedict-bacon',
        title: 'Яйцо Бенедикт с беконом',
        category: 'breakfast',
        price: 650,
        image: img('benedict-bacon'),
    },
    {
        id: 'buckwheat',
        title: 'Гречневая каша с авокадо, яйцом пашот и пармезаном',
        category: 'breakfast',
        price: 490,
        image: img('buckwheat'),
    },
    {
        id: 'cobb-salmon',
        title: 'Кобб – салат с лососем',
        category: 'breakfast',
        price: 890,
        image: img('cobb-salmon'),
    },
    {
        id: 'cobb-shrimp',
        title: 'Кобб – салат с креветками',
        category: 'breakfast',
        price: 960,
        image: img('cobb-shrimp'),
    },
]
