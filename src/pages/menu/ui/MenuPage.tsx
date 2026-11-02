import { useSearchParams } from 'react-router'
import { defaultCategoryId, isCategoryId } from '@/entities/dish'
import { Container } from '@/shared/ui'
import { Contacts } from '@/widgets/contacts'
import { DishCatalog } from '@/widgets/dish-catalog'
import { Header } from '@/widgets/header'

export function MenuPage() {
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')
    const categoryId = isCategoryId(category) ? category : defaultCategoryId

    return (
        <>
            <Header />

            <Container className="pb-16">
                <DishCatalog categoryId={categoryId} />
            </Container>

            <Contacts />
        </>
    )
}
