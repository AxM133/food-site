import { RouterProvider } from 'react-router'
import { BookingProvider } from '@/features/book-table'
import { router } from './router/router'

export function App() {
    return (
        <BookingProvider>
            <RouterProvider router={router} />
        </BookingProvider>
    )
}
