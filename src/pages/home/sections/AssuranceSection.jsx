import { AssuranceCard, CertificateCard } from "../components/HomeCards"

export function AssuranceSection({ assuranceCards, certificateSlides, registerRevealSection }) {
    return (
        <section className="assurance-section reveal-section" ref={registerRevealSection}>
            <div className="assurance-shell">
                <div className="assurance-header reveal-item">
                    <h2>Гарантии, разрешительная документация и контроль качества</h2>
                    <p>
                        Все работы выполняются в соответствии с нормативными требованиями и проходят
                        многоступенчатый контроль на каждом этапе реализации проекта.
                    </p>
                </div>
                <div className="assurance-grid">
                    {assuranceCards.map((card) => (
                        <AssuranceCard card={card} key={card.title} />
                    ))}
                </div>
                <div className="certificates-grid reveal-item" aria-label="Сертификаты и разрешительная документация">
                    {certificateSlides.map((certificate) => (
                        <CertificateCard certificate={certificate} key={certificate.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}
