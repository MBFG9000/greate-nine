import { FileText, Home, MapPin, MessageCircle, Phone, X } from "lucide-react"
import { useEffect, useState } from "react"

import { companyContacts } from "../../../data/contactData"
import { useRevealSections } from "../../home/hooks/useRevealSections"

const scenarioItems = [
    {
        icon: MapPin,
        title: "Участок уже есть",
        text: "Оценим особенности земли, подскажем по подготовке и соберем понятный план строительства под ваш участок.",
        action: "Обсудить участок",
    },
    {
        icon: FileText,
        title: "Нужна проектная часть",
        text: "Поможем с архитектурой, инженерией и рабочей документацией, чтобы проект был готов к реализации.",
        action: "Поговорить с архитектором",
    },
    {
        icon: Home,
        title: "Проект уже готов",
        text: "Проверим решения, адаптируем их под площадку и подготовим строительство без лишних задержек.",
        action: "Проверить проект",
    },
]

const contactLinks = [
    {
        icon: Phone,
        label: "Телефон",
        value: companyContacts.phoneDisplay,
        href: companyContacts.phoneHref,
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: companyContacts.phoneDisplay,
        href: companyContacts.whatsappHref,
        isExternal: true,
    },
]

export const serviceScenarioIcons = {
    FileText,
    Home,
    MapPin,
}

export function ServiceScenarioSection({
    heading = "Подберите подходящий старт",
    lead = "Подключимся на нужном этапе: от первого осмотра участка до запуска готового проекта в работу.",
    items = scenarioItems,
}) {
    const [activeScenario, setActiveScenario] = useState(null)
    const registerRevealSection = useRevealSections()
    const isModalOpen = Boolean(activeScenario)

    useEffect(() => {
        if (!isModalOpen) {
            return undefined
        }

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setActiveScenario(null)
            }
        }

        document.body.classList.add("service-contact-modal-open")
        window.addEventListener("keydown", onKeyDown)

        return () => {
            document.body.classList.remove("service-contact-modal-open")
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [isModalOpen])

    return (
        <section className="service-scenarios reveal-section" ref={registerRevealSection}>
            <div className={`service-scenarios-shell${isModalOpen ? " is-blurred" : ""}`}>
                <div className="service-scenarios-heading reveal-item">
                    <h2>{heading}</h2>
                    <p>{lead}</p>
                </div>

                <div className="service-scenarios-grid">
                    {items.map((item) => {
                        const Icon = item.icon

                        return (
                            <button
                                className="service-scenario-card reveal-item"
                                key={item.title}
                                type="button"
                                onClick={() => setActiveScenario(item)}
                            >
                                <span className="service-scenario-icon" aria-hidden="true">
                                    <Icon size={24} strokeWidth={2} />
                                </span>
                                <span className="service-scenario-title">{item.title}</span>
                                <span className="service-scenario-text">{item.text}</span>
                                <span className="service-scenario-action">{item.action}</span>
                            </button>
                        )
                    })}
                </div>
            </div>

            {isModalOpen && (
                <div
                    className="service-contact-modal"
                    aria-modal="true"
                    role="dialog"
                    aria-labelledby="service-contact-modal-title"
                    onMouseDown={() => setActiveScenario(null)}
                >
                    <div className="service-contact-dialog" onMouseDown={(event) => event.stopPropagation()}>
                        <button
                            className="service-contact-close"
                            type="button"
                            aria-label="Закрыть окно контактов"
                            onClick={() => setActiveScenario(null)}
                        >
                            <X size={22} strokeWidth={2} />
                        </button>

                        <p className="service-contact-kicker">{activeScenario.title}</p>
                        <h3 id="service-contact-modal-title">Нажмите, чтобы связаться</h3>
                        <p>
                            Выберите удобный способ связи. Мы уточним задачу, ответим на вопросы и подскажем следующий
                            шаг.
                        </p>

                        <div className="service-contact-actions">
                            {contactLinks.map((link) => {
                                const Icon = link.icon

                                return (
                                    <a
                                        className="service-contact-link"
                                        href={link.href}
                                        key={link.label}
                                        rel={link.isExternal ? "noopener" : undefined}
                                        target={link.isExternal ? "_blank" : undefined}
                                    >
                                        <Icon size={22} strokeWidth={2} />
                                        <span>{link.label}</span>
                                        <strong>{link.value}</strong>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
