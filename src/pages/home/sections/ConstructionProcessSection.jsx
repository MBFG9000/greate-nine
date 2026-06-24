import { ConstructionProcessStep } from "../components/ConstructionProcessStep"

export function ConstructionProcessSection({ constructionProcess, registerRevealSection }) {
    return (
        <section
            className="construction-process-section reveal-section"
            id="construction-process"
            ref={registerRevealSection}
        >
            <div className="construction-process-shell">
                <h2 className="construction-process-title reveal-item">
                    Прозрачный процесс строительства с контрольными этапами
                </h2>
                <div className="construction-process-path">
                    {constructionProcess.map((item) => (
                        <ConstructionProcessStep item={item} key={item.step} />
                    ))}
                </div>
            </div>
        </section>
    )
}
