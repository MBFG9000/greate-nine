import { ArrowUpRight } from "lucide-react"

export function ConstructionProcessStep({ item }) {
    return (
        <article className="construction-process-step reveal-item">
            <div className="construction-process-marker">
                <span>{item.step}</span>
                <item.Icon aria-hidden="true" strokeWidth={1.9} />
            </div>
            <div className="construction-process-content">
                <ArrowUpRight className="construction-process-arrow" aria-hidden="true" />
                <h3>{item.title}</h3>
                {item.checkpoint && <p className="construction-process-label">Контрольный этап</p>}
                <p>{item.description}</p>
                {item.checkpoint && (
                    <strong className="construction-process-checkpoint">{item.checkpoint}</strong>
                )}
            </div>
        </article>
    )
}
