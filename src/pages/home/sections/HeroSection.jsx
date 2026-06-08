import { useState } from "react"

export function HeroSection({ shouldLoadHeroVideo }) {
    const [heroVideoReady, setHeroVideoReady] = useState(false)

    return (
        <div className={`hero-media-wrapper${heroVideoReady ? " is-video-loaded" : ""}`}>
            <img
                src="/great-nine-construction-hero.webp"
                className="hero-background-image"
                alt="Строительная площадка на рассвете"
                width="1600"
                height="900"
                fetchPriority="high"
                decoding="async"
            />
            {shouldLoadHeroVideo && (
                <video
                    src="/great-nine-hero-construction-loop.mp4"
                    className="hero-background-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/great-nine-construction-hero.webp"
                    onCanPlayThrough={() => setHeroVideoReady(true)}
                    onLoadedData={() => setHeroVideoReady(true)}
                ></video>
            )}
            <div className="hero-dark-overlay"></div>
            <div className="hero-page-transition"></div>
            <div className="hero-content is-loaded">
                <p className="hero-kicker">Great Nine Construction</p>
                <h1 className="hero-title">Great Nine Construction</h1>
                <p className="hero-subtitle">
                    Строим качественно с 1999 года. Реализуем частные и коммерческие проекты с точностью,
                    безопасностью и вниманием к каждой детали.
                </p>
                <div className="hero-actions">
                    <a className="hero-btn" href="#contact">Получить консультацию</a>
                    <a className="hero-link" href="#projects">Смотреть проекты</a>
                </div>
            </div>
        </div>
    )
}
