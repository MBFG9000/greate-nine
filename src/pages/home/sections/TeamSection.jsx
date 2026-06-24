import { useRevealSections } from "../hooks/useRevealSections"

export function TeamSection() {
    const registerRevealSection = useRevealSections()

    return (
        <section className="team-section reveal-section" id="team" ref={registerRevealSection}>
            <div className="team-shell">
                <article className="team-feature reveal-item">
                    <div className="team-feature-copy">
                        <p className="team-kicker">Основатель</p>
                        <h2>Основатель Duron Construction</h2>
                        <p className="team-founder-meta">Личное участие в проектировании, сроках и качестве работ</p>
                        <p>
                            Компания выросла из практического подхода к строительству: сначала понять задачу клиента,
                            затем точно спланировать бюджет, сроки и последовательность работ. Основатель лично
                            выстроил систему контроля, в которой проектные решения, закупки, площадка и приемка
                            связаны в один понятный процесс без хаоса и лишних переделок.
                        </p>
                    </div>
                    <video
                        className="team-feature-video"
                        src="/great-nine-construction-project-showcase.mp4"
                        poster="/great-nine-team-reviewing-construction-plans.webp"
                        controls
                        playsInline
                        preload="metadata"
                        aria-label="Видео об основателе Duron Construction"
                    ></video>
                </article>
            </div>
        </section>
    )
}
