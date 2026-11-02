export type TravelTime = {
    minutes: number
    from: string
    place: string
}

export type WorkingHours = {
    days: string
    time: string
}

export const travelTimes: TravelTime[] = [
    { minutes: 2, from: 'из центра', place: 'Санкт-Петербурга' },
    { minutes: 12, from: 'из города', place: 'Зеленогорск' },
    { minutes: 42, from: 'из аэропорта', place: 'Пулково' },
    { minutes: 52, from: 'из города', place: 'Павловск' },
]

export const address = 'Санкт-Петербург, Северная дорога, 11'

export const phone = '+7 (926) 751-35-68'

export const workingHours: WorkingHours[] = [
    { days: 'Вск-Чт', time: 'с 12:00 до 23:00' },
    { days: 'Пт-Сб', time: 'с 12:00 до 03:00' },
]

// Карта OpenStreetMap, координаты примерные (хз где вообще это)
export const mapUrl = 'https://www.openstreetmap.org/export/embed.html?bbox=30.2300%2C59.9600%2C30.2800%2C59.9850&layer=mapnik&marker=59.9725%2C30.2550'
