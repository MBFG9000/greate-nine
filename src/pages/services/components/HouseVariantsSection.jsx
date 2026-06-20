import { useEffect, useState } from "react"

import { useRevealSections } from "../../home/hooks/useRevealSections"

const houseVariants = [
    {
        title: "Двухэтажные дома",
        text: "Максимум площади и гибкость планировочных решений",
        className: "is-wide",
        images: [
            "/services/houses/двух-этажные-дома.jpg",
            "/services/houses/двух-этажные-дома-2.jpg",
            "/services/houses/двух-этажные-дома-чертежи-1.png",
            "/services/houses/двух-этажные-дома-чертежи-2.png",
            "/services/houses/двух-этажные-дома-чертежи-3.png",
        ],
    },
    {
        title: "Одноэтажные дома",
        text: "Просторные планировки и комфорт в одном уровне",
        className: "is-tall",
        images: [
            "/services/houses/современные-одноэтажные-дома.webp",
            "/services/houses/современные-одноэтажные-дома-чертеж.webp",
        ],
    },
    {
        title: "Мансардные дома",
        text: "Эффективное использование пространства с индивидуальным характером",
        className: "is-horizontal",
        images: [
            "/services/houses/мансардные-дома.jpg",
            "/services/houses/мансардные-дома-чертежи-1.png",
            "/services/houses/мансардные-дома-чертежи-2.png",
            "/services/houses/мансардные-дома-чертежи-3.png",
            "/services/houses/мансардные-дома-чертежи-4.png",
        ],
    },
]

function HouseVariantCard({ variant, cycleInterval }) {
    const [isCycling, setIsCycling] = useState(false)
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    const usesControlledCycle = Boolean(cycleInterval && variant.images.length > 1)

    useEffect(() => {
        if (!isCycling || !usesControlledCycle) {
            return undefined
        }

        const intervalId = window.setInterval(() => {
            setActiveImageIndex((currentIndex) => (currentIndex + 1) % variant.images.length)
        }, cycleInterval)

        return () => window.clearInterval(intervalId)
    }, [cycleInterval, isCycling, usesControlledCycle, variant.images.length])

    const startCycling = () => {
        if (!usesControlledCycle) {
            return
        }

        setActiveImageIndex(1)
        setIsCycling(true)
    }

    const stopCycling = () => {
        if (!usesControlledCycle) {
            return
        }

        setIsCycling(false)
        setActiveImageIndex(0)
    }

    return (
        <article
            className={`house-variant-card ${variant.className} reveal-item${usesControlledCycle ? " is-controlled" : ""}`}
            onMouseEnter={startCycling}
            onMouseLeave={stopCycling}
        >
            <div className="house-variant-media" aria-hidden="true">
                {variant.images.map((image, index) => (
                    <img
                        className={usesControlledCycle && index === activeImageIndex ? "is-active" : ""}
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
                <p>{variant.text}</p>
            </div>
        </article>
    )
}

export function VariantsSection({
    variants = houseVariants,
    heading = "Варианты домов",
    lead = "Подбираем формат дома под участок, сценарии жизни и будущую эксплуатацию. В карточках показаны примеры фасадов и планировочных решений.",
    className = "",
    cycleInterval,
}) {
    const registerRevealSection = useRevealSections()

    return (
        <section className={`house-variants ${className} reveal-section`.trim()} ref={registerRevealSection}>
            <div className="house-variants-shell">
                <div className="house-variants-heading reveal-item">
                    <h2>{heading}</h2>
                    <p>{lead}</p>
                </div>

                <div className="house-variants-grid">
                    {variants.map((variant) => (
                        <HouseVariantCard
                            variant={variant}
                            cycleInterval={cycleInterval}
                            key={variant.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export function HouseVariantsSection() {
    return <VariantsSection />
}
