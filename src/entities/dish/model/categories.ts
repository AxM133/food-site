export const categories = [
    { id: 'breakfast', title: 'Завтраки' },
    { id: 'raw', title: 'Raw' },
    { id: 'cold-starters', title: 'Холодные закуски' },
    { id: 'bruschetta', title: 'Брускетты' },
    { id: 'wine-snacks', title: 'К вину' },
    { id: 'salads', title: 'Салаты' },
    { id: 'soups', title: 'Супы' },
    { id: 'pasta-risotto', title: 'Паста и ризотто' },
    { id: 'meat', title: 'Мясо' },
    { id: 'fish', title: 'Рыба' },
    { id: 'grill', title: 'Grill' },
    { id: 'mangal', title: 'Мангал' },
    { id: 'sides', title: 'Гарниры' },
] as const

export type CategoryId = (typeof categories)[number]['id']

// Проверка для URL
export const defaultCategoryId: CategoryId = 'breakfast'

export function isCategoryId(value: string | null): value is CategoryId {
    return categories.some((category) => category.id === value)
}
