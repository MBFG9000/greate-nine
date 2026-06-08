import { ServiceCard } from "../components/HomeCards"

export function ServicesSection({ registerRevealSection, services }) {
    return (
        <section className="services-section reveal-section" id="services" ref={registerRevealSection}>
            <div className="section-shell services-shell">
                <h2 className="section-title reveal-item">Строительные услуги</h2>
                <div className="services-grid">
                    {services.map((service) => (
                        <ServiceCard key={service.title} service={service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
