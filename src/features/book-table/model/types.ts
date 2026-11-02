export type BookingFormValues = {
    name: string
    phone: string
    guests: string
    time: string
}

export type BookingErrors = Partial<Record<keyof BookingFormValues, string>>
