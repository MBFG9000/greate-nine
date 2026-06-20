import { ArrowLeft, ArrowRight, CircleAlert, ClipboardCheck } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

import "../../../css/home/process-video.css"

import { useInViewFlag } from "../../home/hooks/useInViewFlag"
import { useRevealSections } from "../../home/hooks/useRevealSections"
import { ProcessVideoSection } from "../../home/sections/ProcessVideoSection"

const serviceStages = [
    {
        label: "Подготовка",
        number: "01",
        title: "Исследование участка и подготовительные работы",
        text: "Выезжаем на объект, изучаем грунт, топографию и технические условия, чтобы собрать надежную базу для проектирования.",
        image: "/services/stages/Исследование-участка.webp",
        featured: true,
    },
    {
        label: "Проектирование",
        number: "02",
        title: "Разработка архитектурного проекта",
        text: "Готовим планировки, фасады, конструктивные решения и инженерные разделы с учетом участка, бюджета и пожеланий заказчика.",
        image: "/services/stages/разработка-архитектурного-проекта.png",
    },
    {
        label: "Планирование",
        number: "03",
        title: "Расчет бюджета и согласование стоимости",
        text: "Формируем детальную смету по материалам, оборудованию и работам, фиксируя ключевые расходы до начала реализации.",
        image: "/services/stages/расчет-бюджета-и-согласование-стоимости.jpg",
    },
    {
        label: "Основной этап",
        number: "04",
        title: "Возведение несущих конструкций",
        text: "Устраиваем фундамент, возводим стены, монтируем перекрытия и кровлю с регулярным контролем качества.",
        image: "/services/stages/Возведение-несущих-конструкций.jpg",
    },
    {
        label: "Инженерия",
        number: "05",
        title: "Монтаж инженерных коммуникаций",
        text: "Подключаем отопление, водоснабжение, канализацию, вентиляцию и электрику для безопасной эксплуатации дома.",
        image: "/services/stages/монтаж-инженерных-коммуникаций.jpg",
    },
    {
        label: "Контроль",
        number: "06",
        title: "Технический надзор и проверка качества",
        text: "Следим за соблюдением проекта, проверяем материалы и контролируем выполнение работ на каждом этапе.",
        image: "/services/stages/технический-надзор-и-проверка-качества.jpeg",
    },
    {
        label: "Завершение",
        number: "07",
        title: "Фасадные работы и подготовка объекта",
        text: "Монтируем окна, выполняем фасадные работы, проводим финальную проверку и готовим объект к отделке или передаче.",
        image: "/services/stages/фасадные-работы.jpeg",
    },
]

const constructionFlowStages = [
    {
        number: "01",
        shortLabel: "Подготовка",
        title: "Исследование участка и подготовительные работы",
        text: "Выезжаем на объект, изучаем грунт, топографию и технические условия, чтобы собрать надежную базу для проектирования.",
        important: "Данные по участку определяют конструктив, инженерные решения, бюджет и порядок дальнейших работ.",
        control: "Проверяем особенности грунта, рельеф, подъезды, коммуникации, ограничения участка и исходные документы.",
        checkpoint: "Исходные данные подтверждены перед проектированием",
        image: "/services/stages/Исследование-участка.webp",
    },
    {
        number: "02",
        shortLabel: "Проектирование",
        title: "Разработка архитектурного проекта",
        text: "Готовим планировки, фасады, конструктивные решения и инженерные разделы с учетом участка, бюджета и пожеланий заказчика.",
        important: "Проект связывает внешний вид, планировки, конструктив и инженерные системы в единую понятную схему строительства.",
        control: "Согласовываем планировки, фасады, узлы, инженерные разделы и соответствие решений задачам заказчика.",
        checkpoint: "Концепция и проектные решения согласованы",
        image: "/services/stages/разработка-архитектурного-проекта.png",
    },
    {
        number: "03",
        shortLabel: "Планирование",
        title: "Расчет бюджета и согласование стоимости",
        text: "Формируем детальную смету по материалам, оборудованию и работам, фиксируя ключевые расходы до начала реализации.",
        important: "Прозрачная смета помогает заранее понимать бюджет, сроки и объем обязательств без скрытых доплат.",
        control: "Проверяем состав работ, спецификации материалов, объемы, сроки поставок и договорные условия.",
        checkpoint: "Бюджет, сроки и объем работ зафиксированы",
        image: "/services/stages/расчет-бюджета-и-согласование-стоимости.jpg",
    },
    {
        number: "04",
        shortLabel: "Основной этап",
        title: "Возведение несущих конструкций",
        text: "Устраиваем фундамент, возводим стены, монтируем перекрытия и кровлю с регулярным контролем качества.",
        important: "На этом этапе формируется прочность дома, геометрия помещений и надежность основных конструкций.",
        control: "Проверяем фундамент, армирование, вертикали, перекрытия, кровельные узлы и соответствие проекту.",
        checkpoint: "Несущие конструкции приняты по ключевым этапам",
        image: "/services/stages/Возведение-несущих-конструкций.jpg",
    },
    {
        number: "05",
        shortLabel: "Инженерия",
        title: "Монтаж инженерных коммуникаций",
        text: "Подключаем отопление, водоснабжение, канализацию, вентиляцию и электрику для безопасной эксплуатации дома.",
        important: "Инженерные системы отвечают за ежедневный комфорт, безопасность и стоимость эксплуатации объекта.",
        control: "Проверяем трассы, точки вывода, нагрузки, герметичность, доступ к сервисным узлам и совместимость систем.",
        checkpoint: "Инженерные системы проверены перед закрытием работ",
        image: "/services/stages/монтаж-инженерных-коммуникаций.jpg",
    },
    {
        number: "06",
        shortLabel: "Контроль",
        title: "Технический надзор и проверка качества",
        text: "Следим за соблюдением проекта, проверяем материалы и контролируем выполнение работ на каждом этапе.",
        important: "Постоянный контроль снижает риск переделок и помогает удерживать качество до завершения строительства.",
        control: "Проверяем материалы, технологии, скрытые работы, соответствие проекту и устранение замечаний.",
        checkpoint: "Качество работ подтверждено техническим контролем",
        image: "/services/stages/технический-надзор-и-проверка-качества.jpeg",
    },
    {
        number: "07",
        shortLabel: "Завершение",
        title: "Фасадные работы и подготовка объекта",
        text: "Монтируем окна, выполняем фасадные работы, проводим финальную проверку и готовим объект к отделке или передаче.",
        important: "Финальный этап формирует внешний вид, защищает дом от среды и подготавливает объект к эксплуатации.",
        control: "Проверяем фасадные узлы, окна, примыкания, внешний контур, комплектность работ и готовность к передаче.",
        checkpoint: "Объект подготовлен к отделке или передаче заказчику",
        image: "/services/stages/фасадные-работы.jpeg",
    },
]

export function ConstructionFlowSection({
    stages = constructionFlowStages,
    heading = "Как проходит строительство",
    lead = "Показываем ключевые контрольные точки в процессе работ: что происходит на площадке, почему этап важен и что именно проверяется до перехода дальше.",
    importanceLabel = "Значение этапа",
    controlLabel = "Контрольные точки",
}) {
    const registerRevealSection = useRevealSections()
    const [activeIndex, setActiveIndex] = useState(0)
    const activeStage = stages[activeIndex] ?? stages[0]
    const lastStageIndex = Math.max(stages.length - 1, 0)

    useEffect(() => {
        setActiveIndex(0)
    }, [stages])

    const visibleCards = useMemo(
        () => {
            if (!stages.length) {
                return []
            }

            return [0, 1, 2].map((offset) => {
                const index = (activeIndex + offset) % stages.length
                return {
                    ...stages[index],
                    index,
                    position: offset,
                }
            })
        },
        [activeIndex, stages],
    )

    const goToStage = (nextIndex) => {
        setActiveIndex(Math.min(Math.max(nextIndex, 0), lastStageIndex))
    }

    if (!activeStage) {
        return null
    }

    return (
        <section className="construction-flow reveal-section" ref={registerRevealSection}>
            <div className="construction-flow-heading reveal-item">
                <h2>{heading}</h2>
                <p>{lead}</p>
            </div>

            <div className="construction-flow-shell reveal-item">
                <article className="construction-flow-info">
                    <div className="construction-flow-meta">
                        <span>Этап</span>
                        <strong>{activeStage.number}</strong>
                        <span>из {stages.length}</span>
                    </div>

                    <div className="construction-flow-content">
                        <p className="construction-flow-hint">Стрелки и карточки переключают этапы</p>
                        <h3>{activeStage.title}</h3>
                        <p>{activeStage.text}</p>
                    </div>

                    <div className="construction-flow-notes">
                        <div>
                            <span className="construction-flow-note-icon">
                                <CircleAlert size={16} strokeWidth={2.4} />
                            </span>
                            <strong>{importanceLabel}</strong>
                            <p>{activeStage.important}</p>
                        </div>
                        <div>
                            <span className="construction-flow-note-icon">
                                <ClipboardCheck size={16} strokeWidth={2.4} />
                            </span>
                            <strong>{controlLabel}</strong>
                            <p>{activeStage.control}</p>
                        </div>
                    </div>

                    <div className="construction-flow-footer">
                        <div className="construction-flow-progress" aria-hidden="true">
                            {stages.map((stage, index) => (
                                <span
                                    className={index === activeIndex ? "is-active" : ""}
                                    key={stage.number}
                                ></span>
                            ))}
                        </div>
                        <p>
                            Этап {activeStage.number} из {stages.length}
                            <br />
                            {activeStage.checkpoint}
                        </p>
                        <div className="construction-flow-controls">
                            <button
                                type="button"
                                aria-label="Предыдущий этап"
                                disabled={activeIndex === 0}
                                onClick={() => goToStage(activeIndex - 1)}
                            >
                                <ArrowLeft size={22} strokeWidth={2.6} />
                            </button>
                            <button
                                type="button"
                                aria-label="Следующий этап"
                                disabled={activeIndex === lastStageIndex}
                                onClick={() => goToStage(activeIndex + 1)}
                            >
                                <ArrowRight size={22} strokeWidth={2.6} />
                            </button>
                        </div>
                    </div>
                </article>

                <div className="construction-flow-deck" aria-live="polite">
                    {visibleCards.map((stage) => (
                        <button
                            className={`construction-flow-card is-position-${stage.position}`}
                            type="button"
                            key={`${stage.number}-${stage.position}`}
                            onClick={() => goToStage(stage.index)}
                            style={{ "--flow-image": `url(${stage.image})` }}
                        >
                            <span>{stage.number}</span>
                            <small>Этап {stage.number}</small>
                            <strong>{stage.title}</strong>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function ServiceStagesSection({
    stages = serviceStages,
    heading = "Этапы реализации вашего дома",
    lead = "От первой оценки участка до готового объекта - каждый этап проходит под контролем специалистов и с прозрачным планированием работ.",
}) {
    const registerRevealSection = useRevealSections()
    const [processVideoSectionRef, shouldLoadProcessVideo] = useInViewFlag({
        rootMargin: "360px 0px",
        threshold: 0,
    })

    return (
        <>
            <section className="service-stages reveal-section" ref={registerRevealSection}>
                <div className="service-stages-shell">
                    <div className="service-stages-heading reveal-item">
                        <h2>{heading}</h2>
                        <p>{lead}</p>
                    </div>

                    <div className="service-stages-grid">
                        {stages.map((stage) => (
                            <article
                                className={`service-stage-card reveal-item${stage.featured ? " is-featured" : ""}`}
                                key={stage.number}
                                style={{ "--stage-image": `url(${stage.image})` }}
                            >
                                <div className="service-stage-line" aria-hidden="true"></div>
                                <div className="service-stage-meta">
                                    <span>{stage.label}</span>
                                    <strong>{stage.number}</strong>
                                </div>
                                <div className="service-stage-content">
                                    <h3>{stage.title}</h3>
                                    <p>{stage.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <ProcessVideoSection
                registerRevealSection={registerRevealSection}
                sectionRef={processVideoSectionRef}
                shouldLoadVideo={shouldLoadProcessVideo}
            />
        </>
    )
}
