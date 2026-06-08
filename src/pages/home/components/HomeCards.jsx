import { MapPin } from "lucide-react"

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
        <article className={`${service.className} reveal-item`}>
            <img
                src={service.image}
                srcSet={service.srcSet}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 44vw"
                alt={service.alt}
                width="1600"
                height="1000"
                loading="lazy"
                decoding="async"
            />
            <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>
        </article>
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

export function ProjectCard({ project }) {
    return (
        <article className="project-card reveal-item">
            <img
                src={project.image}
                srcSet={project.srcSet}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 31vw"
                alt={project.alt}
                width="1200"
                height="820"
                loading="lazy"
                decoding="async"
                style={{ objectPosition: project.position }}
            />
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>
                    <MapPin aria-hidden="true" strokeWidth={2.1} />
                    {project.location}
                </p>
            </div>
        </article>
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

export function TeamCard({ member }) {
    return (
        <article className="team-card reveal-item">
            <img
                src="/great-nine-team-reviewing-construction-plans.webp"
                alt={member.alt}
                width="612"
                height="408"
                loading="lazy"
                decoding="async"
            />
            <div>
                <h3>{member.title}</h3>
                <p>{member.description}</p>
            </div>
        </article>
    )
}
