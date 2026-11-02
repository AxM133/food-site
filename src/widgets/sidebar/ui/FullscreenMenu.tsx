import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router'
import { BookTableButton } from '@/features/book-table'
import { navLinks } from '@/shared/config/navLinks'
import { useOverlay } from '@/shared/lib/useOverlay'
import { Logo, SocialLinks } from '@/shared/ui'

type FullscreenMenuProps = {
    onClose: () => void
}

export function FullscreenMenu({ onClose }: FullscreenMenuProps) {
    useOverlay(onClose)

    return (
        <div
            role='dialog'
            aria-modal='true'
            aria-label='Меню'
            className='fixed inset-0 z-30 flex flex-col items-center overflow-y-auto bg-dark py-7'
        >
            <Link to='/' aria-label='На главную' onClick={onClose}>
                <Logo className='text-4xl' />
            </Link>

            <button
                type='button'
                aria-label='Закрыть меню'
                autoFocus
                onClick={onClose}
                className='mt-6 cursor-pointer text-gold transition-opacity hover:opacity-70'
            >
                <FaTimes size={28} />
            </button>

            <nav className='my-auto flex flex-col items-center gap-14 py-10'>
                {navLinks.map(({ label, to }) => (
                    <Link
                        key={label}
                        to={to}
                        onClick={onClose}
                        className='text-5xl font-semibold text-white transition-colors hover:text-gold'
                    >
                        {label}
                    </Link>
                ))}

                <BookTableButton size='lg' onOpen={onClose} />
            </nav>

            <SocialLinks />
        </div>
    )
}
