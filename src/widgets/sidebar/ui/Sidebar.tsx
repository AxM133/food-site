import { Logo, SocialLinks } from '@/shared/ui'

export function Sidebar() {
    return (
        <aside className='fixed inset-y-0 left-0 z-20 flex w-30 flex-col items-center bg-dark py-7'>
            <Logo className='text-4xl' />

            <button
                type='button'
                aria-lable='Открыть меню'
                className='mt-6 flex w-8 cursor-pointer flex-col gap-1.5'
            >
                <span className='h-0.5 w-full bg-gold' />
                <span className='h-0.5 w-3/4 bg-gold' />
                <span className='h-0.5 w-full bg-gold' />
            </button>

            <SocialLinks className='mt-auto flex-col' />
        </aside>
    )
}