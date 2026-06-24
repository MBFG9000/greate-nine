import { companyContacts } from "../../../data/contactData"

export function ContactSection({ contactMethods, registerRevealSection }) {
    return (
        <section className="contact-section reveal-section" id="contact" ref={registerRevealSection}>
            <div className="contact-shell">
                <p className="contact-kicker reveal-item">Свяжитесь с нами</p>
                <h2 className="contact-title reveal-item">Начните проект сегодня</h2>
                <p className="contact-lead reveal-item">
                    Мы быстро отвечаем в WhatsApp. Для срочных вопросов звоните напрямую.
                </p>

                <div className="contact-cards">
                    {contactMethods.map((method) => (
                        <a
                            className="contact-card reveal-item"
                            href={method.href}
                            key={method.label}
                            rel={method.isExternal ? "noopener" : undefined}
                            target={method.isExternal ? "_blank" : undefined}
                        >
                            <span className="contact-label">{method.label}</span>
                            <span className="contact-value">{method.value}</span>
                            <span className="contact-action">{method.action}</span>
                        </a>
                    ))}
                </div>

                <div className="contact-office reveal-item">
                    <span>Офис в Алматы</span>
                    <a
                        className="contact-office-link"
                        href={companyContacts.mapHref}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <strong>{companyContacts.address}</strong>
                        <p>Открыть адрес в 2GIS</p>
                    </a>
                </div>
            </div>
        </section>
    )
}
