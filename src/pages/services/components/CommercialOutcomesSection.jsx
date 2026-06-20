import { Building2, CalendarClock, Settings, Users } from "lucide-react"

import { useRevealSections } from "../../home/hooks/useRevealSections"

const commercialOutcomes = [
    {
        icon: Building2,
        title: "Готовность к эксплуатации",
        text: "Передаем объект полностью готовым к запуску сотрудников, клиентов и оборудования.",
    },
    {
        icon: CalendarClock,
        title: "Предсказуемые сроки",
        text: "Планируем работы по этапам и контролируем выполнение графика строительства.",
    },
    {
        icon: Settings,
        title: "Инженерная надежность",
        text: "Учитываем нагрузки, коммуникации, вентиляцию, электроснабжение и требования эксплуатации.",
    },
    {
        icon: Users,
        title: "Координация подрядчиков",
        text: "Организуем взаимодействие всех участников проекта для соблюдения бюджета и сроков.",
    },
]

export function CommercialOutcomesSection() {
    const registerRevealSection = useRevealSections()

    return (
        <section className="commercial-outcomes reveal-section" ref={registerRevealSection}>
            <div className="commercial-outcomes-shell">
                <h2 className="commercial-outcomes-title reveal-item">
                    Что получает бизнес после запуска объекта
                </h2>

                <div className="commercial-outcomes-layout">
                    <figure className="commercial-outcomes-media reveal-item">
                        <img
                            src="/services/commercial-buildings/commercial-building-paragraph.jpg"
                            alt="Современное коммерческое здание для бизнеса"
                            width="1080"
                            height="1080"
                            loading="lazy"
                            decoding="async"
                        />
                    </figure>

                    <div className="commercial-outcomes-list">
                        {commercialOutcomes.map((outcome) => {
                            const Icon = outcome.icon

                            return (
                                <article className="commercial-outcome reveal-item" key={outcome.title}>
                                    <span className="commercial-outcome-icon" aria-hidden="true">
                                        <Icon size={24} strokeWidth={2} />
                                    </span>
                                    <div>
                                        <h3>{outcome.title}</h3>
                                        <p>{outcome.text}</p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
