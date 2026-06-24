import { MapPin } from "lucide-react"
import { Link } from "react-router-dom"

export function StatCard({ item, value }) {
    return (
        <article className="stat-card">
            <span className="stat-icon">
                <item.Icon aria-hidden="true" strokeWidth={1.9} />
            </span>
            <span className="stat-value">
                {value}
                <span>+</span>
            </span>
            <h3>{item.title}</h3>
            <p>{item.label}</p>
        </article>
    )
}

export function ServiceCard({ service }) {
    return (
        <Link
            className={`${service.className} reveal-item`}
            to={`/services/${service.slug}`}
            aria-label={`Подробнее: ${service.title}`}
        >
            {service.videoSources ? (
                <video
                    aria-label={service.alt}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={service.image}
                    preload="metadata"
                    width="1600"
                    height="1000"
                >
                    {service.videoSources.map((source) => (
                        <source key={source.src} src={source.src} type="video/webm" media={source.media} />
                    ))}
                </video>
            ) : (
                <img
                    src={service.image}
                    srcSet={service.srcSet}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 44vw"
                    alt={service.alt}
                    width={service.imageWidth ?? 1600}
                    height={service.imageHeight ?? 1000}
                    loading="lazy"
                    decoding="async"
                />
            )}
            <div className="service-content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
            </div>
        </Link>
    )
}

export function AdvantageItem({ item }) {
    return (
        <article className="advantage-item reveal-item">
            <span className="advantage-icon">
                <item.Icon aria-hidden="true" strokeWidth={1.9} />
            </span>
            <div className="advantage-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        </article>
    )
}

export function ProjectCard({ project, onOpen }) {
    return (
        <button
            type="button"
            className="project-card reveal-item"
            aria-label={`Открыть проект: ${project.title}`}
            onClick={() => onOpen(project)}
        >
            <img
                src={project.images[0]}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 31vw"
                alt={`${project.title}, реализованный проект Duron Construction`}
                width="1200"
                height="820"
                loading="lazy"
                decoding="async"
            />
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>
                    <MapPin aria-hidden="true" strokeWidth={2.1} />
                    {project.location}
                </p>
            </div>
        </button>
    )
}

export function AssuranceCard({ card }) {
    return (
        <article className="assurance-card reveal-item">
            <span className="assurance-card-icon">
                <card.Icon aria-hidden="true" strokeWidth={1.9} />
            </span>
            <h3>{card.title}</h3>
            <ul>
                {card.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </article>
    )
}

export function CertificateCard({ certificate }) {
    return (
        <article className="certificate-slide">
            <img
                src={certificate.image}
                alt={certificate.alt}
                width="941"
                height="1672"
                loading="lazy"
                decoding="async"
            />
            <h3>{certificate.title}</h3>
        </article>
    )
}
