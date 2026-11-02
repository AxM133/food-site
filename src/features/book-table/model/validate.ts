import { getNationalDigits } from '../lib/phone'
import type { BookingErrors, BookingFormValues } from './types'

export function validateBooking(values: BookingFormValues): BookingErrors {
    const errors: BookingErrors = {}

    if (values.name.trim().length < 2) {
        errors.name = 'Введите имя'
    }

    const phoneDigits = getNationalDigits(values.phone)
    if (phoneDigits.length === 0) {
        errors.phone = 'Введите номер телефона'
    } else if (phoneDigits.length < 10) {
        errors.phone = 'Введите номер полностью'
    } else if (!/^[3489]/.test(phoneDigits)) {
        // в России коды начинаются с 3, 4, 8 и 9
        errors.phone = 'Проверьте код номера'
    }

    const guests = Number(values.guests)
    if (!Number.isInteger(guests) || guests < 1 || guests > 20) {
        errors.guests = 'От 1 до 20'
    }

    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(values.time)) {
        errors.time = 'Например 19:30'
    }

    return errors
}
