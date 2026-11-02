import { FaShoppingBasket, FaUser } from 'react-icons/fa'
import { Container } from '@/shared/ui'

export function Header() {
    return (
        <header className="pt-8 pb-12">
            <Container className="flex items-center justify-end gap-6 text-sm text-dark">
                <button
                    type="button"
                    className="cursor-pointer transition-colors hover:text-gold"
                >
                    Личный кабинет
                </button>
                <button
                    type="button"
                    aria-label="Профиль"
                    className="cursor-pointer transition-colors hover:text-gold"
                >
                    <FaUser size={20} />
                </button>
                <button
                    type="button"
                    aria-label="Корзина"
                    className="cursor-pointer transition-colors hover:text-gold"
                >
                    <FaShoppingBasket size={24} />
                </button>
            </Container>
        </header>
    )
}
