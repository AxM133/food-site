import { Section } from '@/shared/ui'
import { barMenuImage, mainMenuImage } from '../../../config/images'
import { MenuCard, type MenuCardProps } from './MenuCard'

const menuCards: MenuCardProps[] = [
    { title: 'Основное меню', image: mainMenuImage, to: '#' },
    { title: 'Барная карта', image: barMenuImage, to: '#' },
]

export function MenuSection() {
    return (
        <Section
            id="menu"
            label="Меню"
            heading="Меню"
            extra={
                <div className="grid gap-8 sm:grid-cols-2">
                    {menuCards.map((card) => (
                        <MenuCard key={card.title} {...card} />
                    ))}
                </div>
            }
        >
            <p>
                At faucibus nullam mauris vitae ut non. Augue libero non nibh nec, et
                eget erat. Nascetur nunc neque, varius massa aliquam interdum turpis
                massa. Ac tortor aliquam risus, interdum nisl mauris sit.
            </p>
            <p>Nunc cras cras aliquet blandit faucibus massa sagittis semper.</p>
        </Section>
    )
}
