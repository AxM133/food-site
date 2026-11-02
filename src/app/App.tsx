import { DishCard, dishes } from '@/entities/dish'
import { Button, Container } from '@/shared/ui'
import { Footer } from '@/widgets/footer'
import { Sidebar } from '@/widgets/sidebar'

export function App() {
    return (
        <div className="flex min-h-screen flex-col">
            <Sidebar />

            <main className="flex-1 py-10">
                <Container>
                    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {dishes.map((dish) => (
                            <li key={dish.id}>
                                <DishCard dish={dish} action={<Button>В корзину</Button>} />
                            </li>
                        ))}
                    </ul>
                </Container>
            </main>

            <Footer />
        </div>
    )
}
