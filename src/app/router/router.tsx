import { createBrowserRouter } from 'react-router'
import { HomePage } from '@/pages/home'
import { MenuPage } from '@/pages/menu'
import { RootLayout } from '../layouts/RootLayout'
import { DishPage } from '@/pages/dish'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'menu', element: <MenuPage /> },
            { path: 'dish/:dishId', element: <DishPage /> }
        ],
    },
])
