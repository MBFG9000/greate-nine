"use client"

import { useRevealSections } from "../../home/hooks/useRevealSections"

const repairVariants = [
    {
        title: "Косметический ремонт",
        className: "is-wide",
        points: [
            "обновление отделки",
            "покраска стен",
            "замена покрытий",
            "освежение интерьера",
        ],
        images: [
            "/services/repair-cards/косметический-ремонт-главная.jpg",
            "/services/repair-cards/косметический-ремонт-продолжение-1.jpg",
            "/services/repair-cards/косметический-ремонт-продолжение-2.jpg",
            "/services/repair-cards/косметический-ремонт-продолжение-3.jpg",
        ],
    },
    {
        title: "Капитальный ремонт",
        className: "is-tall",
        points: [
            "демонтаж старых конструкций",
            "замена коммуникаций",
            "выравнивание поверхностей",
            "полная реконструкция помещений",
        ],
        images: [
            "/services/repair-cards/капитальный-ремонт-главная.jpeg",
            "/services/repair-cards/капитальный-ремонт-вспомогательная-1.png",
            "/services/repair-cards/капитальный-ремонт-вспомогательная-2.jpg",
            "/services/repair-cards/капитальный-ремонт-вспомогательная-3.webp",
        ],
    },
    {
        title: "Дизайнерский ремонт",
        className: "is-horizontal",
        points: [
            "работа по дизайн-проекту",
            "индивидуальные решения",
            "премиальные материалы",
            "авторский надзор",
        ],
        images: [
            "/services/repair-cards/дизайнерский-ремонт-главная.webp",
            "/services/repair-cards/дизайнерский-ремонт-вспомогательная-1.webp",
            "/services/repair-cards/дизайнерский-ремонт-вспомогательная-2.jpg",
            "/services/repair-cards/дизайнерский-ремонт-вспомогательная-3.webp",
        ],
    },
]

export function RepairVariantsSection() {
    const registerRevealSection = useRevealSections()

    return (
        <section className="house-variants repair-variants reveal-section" ref={registerRevealSection}>
            <div className="house-variants-shell">
                <div className="house-variants-heading reveal-item">
                    <h2>Варианты ремонта под ключ</h2>
                    <p>
                        Подбираем формат ремонта под состояние объекта, задачи интерьера и желаемый уровень отделки.
                    </p>
                </div>

                <div className="house-variants-grid">
                    {repairVariants.map((variant) => (
                        <article
                            className={`house-variant-card ${variant.className} reveal-item`}
                            key={variant.title}
                        >
                            <div className="house-variant-media" aria-hidden="true">
                                {variant.images.map((image, index) => (
                                    <img
                                        src={image}
                                        alt=""
                                        width="1200"
                                        height="820"
                                        loading="lazy"
                                        decoding="async"
                                        key={image}
                                        style={{
                                            "--image-index": index,
                                            "--image-delay": `${Math.max(index - 1, 0) * 1.6}s`,
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="house-variant-copy">
                                <h3>{variant.title}</h3>
                                <ul className="house-variant-list">
                                    {variant.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
