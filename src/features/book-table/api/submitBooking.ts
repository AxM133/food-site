import type { BookingFormValues } from '../model/types'

// Пока бэкенда нет, имитируем запрос. Потом здесь будет fetch
export async function submitBooking(values: BookingFormValues): Promise<void> {
    console.log('Бронь столика', values)

    await new Promise((resolve) => setTimeout(resolve, 700))
}
