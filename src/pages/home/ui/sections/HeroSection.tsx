import { useRef } from 'react'
import { Link } from 'react-router'
import { BookTableButton } from '@/features/book-table'
import { navLinks } from '@/shared/config/navLinks'
import { useScrollProgress } from '@/shared/lib/useScrollProgress'
import { Container } from '@/shared/ui'
import { heroImage } from '../../config/images'

export function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null)

    // Пишет --scroll-progress (0..1) в section, дальше всё делают стили ниже
    useScrollProgress(sectionRef)

    return (
        <section
            ref={sectionRef}
            className='relative flex h-screen min-h-150 items-end overflow-hidden text-white'
        >
            {/* Фон начинается выше экрана и при прокрутке едет вниз медленнее страницы, плюс приближается */}
            <div className='absolute inset-x-0 -top-[20vh] bottom-0 translate-y-[calc(var(--scroll-progress,0)*20vh)] scale-[calc(1+var(--scroll-progress,0)*0.2)] will-change-transform'>
                <img
                    src={heroImage}
                    alt=''
                    className='h-full w-full object-cover motion-safe:animate-hero-zoom'
                />
            </div>

            {/* Затемнение растёт по мере прокрутки */}
            <div className='absolute inset-0 bg-black opacity-[calc(0.45+var(--scroll-progress,0)*0.35)]' />

            <nav className='absolute top-0 right-0 hidden items-center gap-10 px-6 py-6 text-sm md:flex min-[1700px]:pr-24'>
                {navLinks.map(({ label, to }) => (
                    <Link key={label} to={to} className='transition-colors hover:text-gold'>
                        {label}
                    </Link>
                ))}
                <BookTableButton />
            </nav>

            <Container className='relative pb-40'>
                {/* Заголовок отстаёт от страницы и тает */}
                <div className='translate-y-[calc(var(--scroll-progress,0)*120px)] opacity-[calc(1-var(--scroll-progress,0)*1.8)]'>
                    <h1 className='max-w-230 text-4xl leading-snug font-semibold motion-safe:animate-hero-fade-up md:text-5xl lg:pl-28'>
                        Видовой ресторан Food Exxe Relo на Крестовском острове
                    </h1>
                </div>
            </Container>
        </section>
    )
}
