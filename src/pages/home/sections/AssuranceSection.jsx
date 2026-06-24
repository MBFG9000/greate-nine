import { AssuranceCard } from "../components/HomeCards"

export function AssuranceSection({ assuranceCards, hasCertificates = false, registerRevealSection }) {
    return (
        <section
            className={`assurance-section reveal-section${hasCertificates ? " has-certificates" : ""}`}
            id="assurance"
            ref={registerRevealSection}
        >
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
            </div>
        </section>
    )
}
