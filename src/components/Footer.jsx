import { Link } from "react-router-dom"
import "../css/Footer.css"

import { companyContacts } from "../data/contactData"
import { showDeferredHomeSections } from "../pages/home/config/homeSections"

const footerColumns = [
    {
        title: "Услуги",
        links: [
            { label: "Строительство частных домов", to: "/services/private-houses" },
            { label: "Коммерческие здания", to: "/services/commercial-buildings" },
            { label: "Ремонт под ключ", to: "/services/turnkey-repair" },
            { label: "Строительство коттеджей", to: "/services/cottages" },
        ],
    },
    {
        title: "Проекты",
        links: [
            { label: "Наше участие в проектах", to: "/#projects" },
            { label: "Коммерческие объекты", to: "/services/commercial-buildings" },
            { label: "Частные дома", to: "/services/private-houses" },
            { label: "Коттеджи", to: "/services/cottages" },
        ],
    },
    {
        title: "Компания",
        links: [
            { label: "О нас", to: "/#about" },
            { label: "Этапы строительства", to: "/#construction-process" },
            { label: "Гарантии и контроль", to: "/#assurance" },
            ...(showDeferredHomeSections ? [{ label: "Основатель", to: "/#team" }] : []),
        ],
    },
    {
        title: "Поддержка",
        links: [
            { label: "Контакты", to: "/#contact" },
            { label: "Позвонить", href: companyContacts.phoneHref },
            { label: "WhatsApp", href: companyContacts.whatsappHref, isExternal: true },
            { label: "Адрес в 2GIS", href: companyContacts.mapHref, isExternal: true },
        ],
    },
]

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-shell">
                <div className="footer-grid">
                    <section className="footer-brand" aria-label="О компании">
                        <h3>Duron Construction</h3>
                        <p>
                            Строительная компания полного цикла: проектирование, управление площадкой, контроль сроков
                            и качества до передачи объекта.
                        </p>
                        <address>
                            <a href={companyContacts.mapHref} rel="noopener noreferrer" target="_blank">
                                {companyContacts.address}
                            </a>
                            <a href={companyContacts.phoneHref}>{companyContacts.phoneDisplay}</a>
                        </address>
                    </section>

                    {footerColumns.map((column) => (
                        <nav className="footer-links" aria-label={column.title} key={column.title}>
                            <h3>{column.title}</h3>
                            <ul>
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        {link.href ? (
                                            <a
                                                href={link.href}
                                                rel={link.isExternal ? "noopener noreferrer" : undefined}
                                                target={link.isExternal ? "_blank" : undefined}
                                            >
                                                {link.label}
                                            </a>
                                        ) : link.to.startsWith("/#") ? (
                                            <a href={link.to}>{link.label}</a>
                                        ) : (
                                            <Link to={link.to}>{link.label}</Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
