import { useState, type ReactNode } from 'react'
import { BookingContext } from '../model/bookingContext'
import { BookingModal } from './BookingModal'

type BookingProviderProps = {
    children: ReactNode
}

export function BookingProvider({ children }: BookingProviderProps) {
    const [isOpen, setIsOpen] = useState(false)

    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    return (
        <BookingContext value={{ open, close }}>
            {children}
            {isOpen && <BookingModal onClose={close} />}
        </BookingContext>
    )
}
