import { Link } from 'react-router'
import { categories, type CategoryId } from '@/entities/dish'
import { cn } from '@/shared/lib/cn'

type CategoryTabsProps = {
    activeId: CategoryId
}

export function CategoryTabs({ activeId }: CategoryTabsProps) {
    return (
        <nav aria-label="Категории меню" className="overflow-x-auto">
            <ul className="flex min-w-max justify-between gap-8">
                {categories.map(({ id, title }) => {
                    const isActive = id === activeId

                    return (
                        <li key={id}>
                            <Link
                                to={`/menu?category=${id}`}
                                aria-current={isActive ? 'page' : undefined}
                                className={cn(
                                    'block border-b-2 pb-2 text-sm whitespace-nowrap text-dark transition-colors hover:text-gold',
                                    isActive ? 'border-gold' : 'border-transparent',
                                )}
                            >
                                {title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
