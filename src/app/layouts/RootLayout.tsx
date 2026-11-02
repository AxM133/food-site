import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import { Footer } from '@/widgets/footer'
import { Sidebar } from '@/widgets/sidebar'

export function RootLayout() {
    const { pathname } = useLocation()
    const isHome = pathname === '/'

    return (
        <div className="flex min-h-screen flex-col">
            <Sidebar />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer withPayments={!isHome} />
            <ScrollRestoration />
        </div>
    )
}
