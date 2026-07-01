import { useState } from "react"

import { scrollToSection } from "../../../utils/scrollToSection"

export function HeroSection({ shouldLoadHeroVideo }) {
    const [heroVideoReady, setHeroVideoReady] = useState(false)

    return (
        <div className={`hero-media-wrapper${heroVideoReady ? " is-video-loaded" : ""}`}>
            <img
                src="/duron-construction-hero-section-poster.webp"
                srcSet="/duron-construction-hero-section-poster-960.webp 960w, /duron-construction-hero-section-poster.webp 1600w"
                sizes="100vw"
                className="hero-background-image"
                alt="Duron Construction - строительство домов и коммерческих объектов"
                width="1600"
                height="900"
                fetchPriority="high"
                decoding="async"
            />
            {shouldLoadHeroVideo && (
                <video
                    src="/duron-construction-hero-section-video.webm"
                    className="hero-background-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-hidden="true"
                    onCanPlay={() => setHeroVideoReady(true)}
                    onLoadedData={() => setHeroVideoReady(true)}
                />
            )}
            <div className="hero-dark-overlay"></div>
            <div className="hero-page-transition"></div>
            <div className="hero-content is-loaded">
                <p className="hero-kicker">Строительство полного цикла</p>
                <p className="hero-title">Duron Construction</p>
                <h1 className="hero-subtitle">
                    Строительство, капитальный ремонт и реконструкция объектов в Алматы качественно с 2011 года.
                    Частные дома, коттеджи, коммерческие здания и инфраструктурные объекты под ключ.
                </h1>
                <div className="hero-actions">
                    <a
                        className="hero-btn"
                        href="#contact"
                        onClick={(event) => {
                            event.preventDefault()
                            scrollToSection("contact")
                        }}
                    >
                        Получить консультацию
                    </a>
                    <a className="hero-link" href="#projects">Смотреть проекты</a>
                </div>
            </div>
        </div>
    )
}
