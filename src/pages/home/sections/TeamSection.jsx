import { TeamCard } from "../components/HomeCards"

export function TeamSection({ registerRevealSection, teamMembers }) {
    return (
        <section className="team-section reveal-section" id="team" ref={registerRevealSection}>
            <div className="team-shell">
                <article className="team-feature reveal-item">
                    <div className="team-feature-copy">
                        <p className="team-kicker">Команда</p>
                        <h2>Основатели и команда</h2>
                        <p>
                            Great Nine Construction объединяет управленцев, инженеров и специалистов площадки,
                            которые ведут проект от первой консультации до передачи объекта. Мы работаем в единой
                            системе решений: фиксируем договоренности, контролируем сроки и держим качество работ
                            под техническим наблюдением на каждом этапе.
                        </p>
                    </div>
                    <img
                        src="/great-nine-team-reviewing-construction-plans.webp"
                        alt="Основатели и команда Great Nine Construction обсуждают строительный проект"
                        width="612"
                        height="408"
                        loading="lazy"
                        decoding="async"
                    />
                </article>
                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <TeamCard key={member.title} member={member} />
                    ))}
                </div>
            </div>
        </section>
    )
}
