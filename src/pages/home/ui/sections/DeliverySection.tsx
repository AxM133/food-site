import { Button, Section } from '@/shared/ui'

export function DeliverySection() {
    return (
        <Section id="delivery" label="Доставка" heading="Служба доставки">
            <p>
                Phasellus diam, ultrices lobortis integer et. Diam, purus vel sagittis,
                non, a. In risus, venenatis enim vitae mauris aliquet orci. Consectetur
                nibh interdum nullam ut lobortis eu etiam sem. Et in vitae pellentesque
                suspendisse. Semper aliquam id et ultrices velit donec lacus.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
                <Button size="md">Подробнее</Button>
                <Button variant="outline" size="md">
                    Условия доставки
                </Button>
            </div>
        </Section>
    )
}
