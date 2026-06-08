import { StatCard } from "../components/HomeCards"

export function StatisticsSection({ isVisible, numbers, sectionRef, statistics }) {
    return (
        <section className={`statistics-section${isVisible ? " is-visible" : ""}`} ref={sectionRef}>
            <div className="statistics-shell">
                <p className="statistics-kicker">Опыт в цифрах</p>
                <h2 className="statistics-title">Мы работаем с частными и коммерческими проектами</h2>
                <div className="statistics-grid">
                    {statistics.map((item, index) => (
                        <StatCard item={item} key={item.title} value={numbers[index]} />
                    ))}
                </div>
            </div>
        </section>
    )
}
