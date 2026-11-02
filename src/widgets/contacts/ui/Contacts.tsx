import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { BookTableButton } from '@/features/book-table'
import { Button, Container, SectionTitle } from '@/shared/ui'
import { address, mapUrl, phone, travelTimes, workingHours, } from '../config/contacts'

export function Contacts() {
    return (
        <section id="contacts" className="pt-16 pb-24">
            <Container>
                <SectionTitle>Контакты</SectionTitle>

                <div className="mt-20 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-28">
                    <ul className="grid grid-cols-2 gap-x-10 gap-y-12 lg:w-110 lg:shrink-0">
                        {travelTimes.map(({ minutes, from, place }) => (
                            <li key={place}>
                                <p className="text-gold">
                                    <span className="text-7xl font-semibold">{minutes}</span>{' '}
                                    <span className="text-2xl font-semibold uppercase">мин</span>
                                </p>
                                <p className="mt-3 leading-snug text-dark">
                                    <span className="block">{from}</span>
                                    <span className="block">{place}</span>
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="relative lg:flex-1">
                        <iframe
                            title="Карта проезда"
                            src={mapUrl}
                            loading="lazy"
                            className="h-80 w-full border-0 grayscale lg:h-112.5"
                        />

                        <div className="bg-graphite p-10 text-white lg:absolute lg:top-14 lg:-left-28 lg:w-104">
                            <address className="space-y-4 text-sm not-italic">
                                <p className="flex items-center gap-4">
                                    <FaMapMarkerAlt className="shrink-0 text-gold" />
                                    {address}
                                </p>
                                <p className="flex items-center gap-4">
                                    <FaPhoneAlt className="shrink-0 text-gold" />
                                    <a
                                        href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                                        className="transition-colors hover:text-gold"
                                    >
                                        {phone}
                                    </a>
                                </p>
                            </address>

                            <h3 className="mt-8 text-xl font-semibold">Время работы</h3>
                            <ul className="mt-5 space-y-3">
                                {workingHours.map(({ days, time }) => (
                                    <li key={days}>
                                        <span className="font-semibold">{days}</span>{' '}
                                        <span>{time}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <BookTableButton />
                                <Button variant="outline-light">Задать вопрос</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
