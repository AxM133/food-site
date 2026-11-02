import { useState } from 'react'
import { Link } from 'react-router'
import { Logo, SocialLinks } from '@/shared/ui'
import { FullscreenMenu } from './FullscreenMenu'

export function Sidebar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <aside className='fixed inset-y-0 left-0 z-20 flex w-30 flex-col items-center bg-dark py-7'>
                <Link to='/' aria-label='На главную'>
                    <Logo className='text-4xl' />
                </Link>

                <button
                    type='button'
                    aria-label='Открыть меню'
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(true)}
                    className='mt-6 flex w-8 cursor-pointer flex-col gap-1.5'
                >
                    <span className='h-0.5 w-full bg-gold' />
                    <span className='h-0.5 w-3/4 bg-gold' />
                    <span className='h-0.5 w-full bg-gold' />
                </button>

                <SocialLinks className='mt-auto flex-col' />
            </aside>

            {isMenuOpen && <FullscreenMenu onClose={() => setIsMenuOpen(false)} />}
        </>
    )
}
