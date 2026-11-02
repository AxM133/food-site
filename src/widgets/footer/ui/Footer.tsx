import { Link } from 'react-router'
import { Container, Logo } from '@/shared/ui'

const paymentSystems = ['VISA', 'МИР', 'Mastercard']

type FooterProps = {
    withPayments?: boolean
}

export function Footer({ withPayments = false }: FooterProps) {
    return (
        <footer className='bg-dark py-10 text-white'>
            <Container className='flex items-center justify-between gap-6'>
                <Link to='/' aria-label='На главную'>
                    <Logo className='text-4xl' />
                </Link>

                <a href='#' className='text-sm transition-colors hover:text-gold'>
                    Политика конфиденциальности
                </a>

                {withPayments && (
                    <ul className='flex items-center gap-4'>
                        {paymentSystems.map((name) => (
                            <li key={name} className='rounded bg-white px-2 py-1 text-xs font-bold text-dark'>
                                {name}
                            </li>
                        ))}
                    </ul>
                )}

                <span className='text-sm font-semibold'>Дизайн d-e-n.ru</span>
            </Container>
        </footer>
    )
}