import { AdvantageItem } from "../components/HomeCards"

export function AdvantagesSection({ advantages, registerRevealSection }) {
    return (
        <section className="advantages-section reveal-section" ref={registerRevealSection}>
            <div className="advantages-shell">
                <h2 className="advantages-title reveal-item">Чем мы структурно отличаемся от рынка</h2>
                <div className="advantages-list">
                    {advantages.map((item) => (
                        <AdvantageItem item={item} key={item.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}
