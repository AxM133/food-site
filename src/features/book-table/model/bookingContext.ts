import { createContext, useContext } from 'react'

type BookingContextValue = {
    open: () => void
    close: () => void
}

export const BookingContext = createContext<BookingContextValue | null>(null)

export function useBooking() {
    const context = useContext(BookingContext)

    if (!context) {
        throw new Error('useBooking нужно вызывать внутри <BookingProvider>')
    }

    return context
}
