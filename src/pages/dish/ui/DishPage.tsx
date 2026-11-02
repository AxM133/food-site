import { Link, useParams } from 'react-router'
import { dishes } from '@/entities/dish'
import { Container } from '@/shared/ui'
import { Contacts } from '@/widgets/contacts'
import { CategoryTabs } from '@/widgets/dish-catalog'
import { Header } from '@/widgets/header'
import { DishDetails } from './DishDetails'

export function DishPage() {
    const { dishId } = useParams()
    const dish = dishes.find((item) => item.id === dishId)

    return (
        <>
            <Header />

            <Container className="pb-24">
                {dish ? (
                    <>
                        <CategoryTabs activeId={dish.category} />
                        <DishDetails key={dish.id} dish={dish} />
                    </>
                ) : (
                    <div className="py-24 text-center">
                        <p className="text-xl text-dark">Блюдо не найдено</p>
                        <Link to="/menu" className="mt-6 inline-block text-gold underline">
                            Вернуться в меню
                        </Link>
                    </div>
                )}
            </Container>

            <Contacts />
        </>
    )
}
