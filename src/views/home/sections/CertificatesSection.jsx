import { CertificateCard } from "../components/HomeCards"
import { useRevealSections } from "../hooks/useRevealSections"

export function CertificatesSection({ certificates }) {
    const registerRevealSection = useRevealSections()

    return (
        <section className="certificates-section reveal-section" ref={registerRevealSection}>
            <div className="certificates-shell">
                <div className="certificates-grid reveal-item" aria-label="Сертификаты и разрешительная документация">
                    {certificates.map((certificate) => (
                        <CertificateCard certificate={certificate} key={certificate.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}
