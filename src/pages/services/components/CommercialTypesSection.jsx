import { useRevealSections } from "../../home/hooks/useRevealSections"

const commercialTypes = [
    {
        number: "01",
        title: "Офисные здания",
        text: "Проектируем и строим современные офисные здания с учетом требований к инженерным системам, комфорту сотрудников и эффективной организации рабочих пространств.",
        image: "/services/commercial-buildings/офисные-здания-карточка.jpg",
    },
    {
        number: "02",
        title: "Бизнес-центры",
        text: "Реализуем многофункциональные бизнес-центры с продуманной инфраструктурой, коммерческими площадями и инженерными решениями для долгосрочной эксплуатации.",
        image: "/services/commercial-buildings/бизнес-центры.jpg",
    },
    {
        number: "03",
        title: "Кафе и рестораны",
        text: "Строим объекты общественного питания с учетом технологических процессов кухни, вентиляции, инженерных нагрузок и требований к обслуживанию гостей.",
        image: "/services/commercial-buildings/кафе-рестораны.jpg",
    },
    {
        number: "04",
        title: "Торговые помещения",
        text: "Создаем торговые пространства, ориентированные на удобство покупателей, эффективное размещение арендаторов и стабильную эксплуатацию объекта.",
        image: "/services/commercial-buildings/торговые-помещения.webp",
    },
]

export function CommercialTypesSection() {
    const registerRevealSection = useRevealSections()

    return (
        <section className="commercial-types reveal-section" ref={registerRevealSection}>
            <div className="commercial-types-shell">
                <header className="commercial-types-heading reveal-item">
                    <p className="commercial-types-label">Коммерческое строительство</p>
                    <h2>Какие коммерческие объекты мы строим</h2>
                    <p className="commercial-types-lead">
                        Реализуем проекты коммерческого строительства для бизнеса, торговли и сферы услуг с учетом
                        эксплуатационных требований и задач будущих пользователей.
                    </p>
                </header>

                <div className="commercial-types-grid">
                    {commercialTypes.map((type) => (
                        <article
                            className="commercial-type-card reveal-item"
                            key={type.number}
                            style={{ "--commercial-type-image": `url(${type.image})` }}
                        >
                            <span className="commercial-type-number" aria-hidden="true">
                                {type.number}
                            </span>
                            <span className="commercial-type-line" aria-hidden="true"></span>
                            <h3>{type.title}</h3>
                            <p>{type.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
