// Достаёт 10 цифр номера без кода страны: "+7 (921) 777-77-77" -> "9217777777".
// Первая 7 или 8 считается кодом страны, так сработают и "89217777777", и "+79217777777"
export function getNationalDigits(value: string) {
    const digits = value.replace(/\D/g, '')
    const national = /^[78]/.test(digits) ? digits.slice(1) : digits

    return national.slice(0, 10)
}

// Маска "+7 (921) 777-77-77". Знаки добавляются только перед следующей цифрой,
// чтобы Backspace мог стереть их, а не возвращал обратно
export function formatPhone(value: string) {
    if (!/\d/.test(value)) return ''

    const national = getNationalDigits(value)
    let result = '+7'

    if (national.length > 0) result += ` (${national.slice(0, 3)}`
    if (national.length > 3) result += `) ${national.slice(3, 6)}`
    if (national.length > 6) result += `-${national.slice(6, 8)}`
    if (national.length > 8) result += `-${national.slice(8, 10)}`

    return result
}
