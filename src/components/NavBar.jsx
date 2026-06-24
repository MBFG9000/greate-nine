import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import "../css/Navbar.css"

import { showDeferredHomeSections } from "../pages/home/config/homeSections"

const navItems = [
    { id: "home", label: "Главная" },
    { id: "about", label: "О нас" },
    { id: "services", label: "Услуги" },
    { id: "projects", label: "Проекты" },
    ...(showDeferredHomeSections ? [{ id: "team", label: "Команда" }] : []),
    { id: "contact", label: "Контакты" },
]

function NavBar() {
    const location = useLocation()
    const navigate = useNavigate()
    const [isSticky, setIsSticky] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 40)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const scrollToSection = (id) => {
        const target = document.getElementById(id)

        if (target) {
            const header = document.querySelector(".site-header")
            const headerOffset = (header?.getBoundingClientRect().height || 56) + 10
            const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset

            window.scrollTo({ top: targetTop, behavior: "smooth" })
            window.history.pushState(null, "", `#${id}`)
        }
    }

    const scrollTo = (event, id) => {
        event.preventDefault()
        setIsMenuOpen(false)

        if (location.pathname !== "/") {
            navigate({ pathname: "/", hash: `#${id}` })
            window.setTimeout(() => scrollToSection(id), 80)
            return
        }

        scrollToSection(id)
    }

    return (
        <header className={`site-header${isSticky ? " is-sticky" : ""}${isMenuOpen ? " is-menu-open" : ""}`}>
            <div className="logo">
                <a href="/#home" aria-label="Duron Construction" onClick={(event) => scrollTo(event, "home")}>
                    <img
                        className="logo-svg"
                        src="/duron-construction-logo.svg"
                        alt="Логотип Duron Construction"
                    />
                    <span className="logo-wordmark">Duron Construction</span>
                </a>
            </div>
            <button
                className="menu-toggle"
                type="button"
                aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={isMenuOpen}
                aria-controls="site-navigation"
                onClick={() => setIsMenuOpen((current) => !current)}
            >
                {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
            <nav id="site-navigation" aria-label="Основная навигация">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a href={`/#${item.id}`} onClick={(event) => scrollTo(event, item.id)}>
                                <span className="nav-text">{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="btn-header">
                <button type="button" onClick={(event) => scrollTo(event, "contact")}>Связаться</button>
            </div>
        </header>
    )
}

export default NavBar
