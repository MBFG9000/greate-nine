import { Link } from "react-router-dom"
import "../css/Footer.css"

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
            { label: "Частная вилла", to: "/projects/private-villa-almaty" },
            { label: "Загородный дом", to: "/projects/family-house-kaskelen" },
            { label: "Коммерческий объект", to: "/projects/commercial-project-astana" },
            { label: "Офисное пространство", to: "/projects/office-space-almaty" },
        ],
    },
    {
        title: "Компания",
        links: [
            { label: "О нас", to: "/#about" },
            { label: "Процесс строительства", to: "/#services" },
            { label: "Гарантии и документы", to: "/#projects" },
            { label: "Основатель", to: "/#team" },
        ],
    },
    {
        title: "Поддержка",
        links: [
            { label: "Контакты", to: "/#contact" },
            { label: "Позвонить", href: "tel:+77001234567" },
            { label: "WhatsApp", href: "https://wa.me/77001234567" },
            { label: "Консультация", to: "/#contact" },
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
                            <span>Алматы, проспект Аль-Фараби 77, офис 1204</span>
                            <a href="tel:+77001234567">+7 (700) 123-45-67</a>
                            <a href="mailto:info@duronconstruction.kz">info@duronconstruction.kz</a>
                        </address>
                    </section>

                    {footerColumns.map((column) => (
                        <nav className="footer-links" aria-label={column.title} key={column.title}>
                            <h3>{column.title}</h3>
                            <ul>
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        {link.href ? (
                                            <a href={link.href}>{link.label}</a>
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
