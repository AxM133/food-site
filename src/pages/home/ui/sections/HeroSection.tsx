import { Link } from 'react-router'
import { BookTableButton } from '@/features/book-table'
import { navLinks } from '@/shared/config/navLinks'
import { Container } from '@/shared/ui'
import { heroImage } from '../../config/images'

export function HeroSection() {
    return (
        <section className='relative flex h-screen min-h-150 items-end text-white'>
            <img
                src={heroImage}
                alt=''
                className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-black/45' />

            <nav className='absolute top-0 right-0 hidden items-center gap-10 px-6 py-6 text-sm md:flex min-[1700px]:pr-24'>
                {navLinks.map(({ label, to }) => (
                    <Link key={label} to={to} className='transition-colors hover:text-gold'>
                        {label}
                    </Link>
                ))}
                <BookTableButton />
            </nav>

            <Container className='relative pb-40'>
                <h1 className='max-w-205 text-4xl leading-snug font-semibold md:text-5xl lg:pl-28'>
                    Видовой ресторан Food Exxe Relo на Крестовском острове
                </h1>
            </Container>
        </section>
    )
}