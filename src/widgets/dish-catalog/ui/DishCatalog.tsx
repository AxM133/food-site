import { DishCard, dishes, type CategoryId } from '@/entities/dish'
import { Button } from '@/shared/ui'
import { CategoryTabs } from './CategoryTabs'

type DishCatalogProps = {
    categoryId: CategoryId
}

export function DishCatalog({ categoryId }: DishCatalogProps) {
    const visibleDishes = dishes.filter((dish) => dish.category === categoryId)

    return (
        <div>
            <CategoryTabs activeId={categoryId} />

            {visibleDishes.length > 0 ? (
                <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {visibleDishes.map((dish) => (
                        <li key={dish.id}>
                            <DishCard dish={dish} action={<Button>В корзину</Button>} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="mt-16 text-center text-graphite">
                    В этой категории пока нет блюд
                </p>
            )}
        </div>
    )
}
