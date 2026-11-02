import { Contacts } from '@/widgets/contacts'
import { AboutSection, DeliverySection, HeroSection, MenuSection, } from './sections'

export function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <MenuSection />
            <DeliverySection />
            <Contacts />
        </>
    )
}
