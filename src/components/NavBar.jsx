import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import "../css/Navbar.css"

function NavBar() {
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

    const scrollTo = (event, id) => {
        event.preventDefault()

        const target = document.getElementById(id)
        if (target) {
            const header = document.querySelector(".site-header")
            const headerOffset = (header?.getBoundingClientRect().height || 56) + 10
            const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset

            window.scrollTo({ top: targetTop, behavior: "smooth" })
            window.history.pushState(null, "", `#${id}`)
        }
        setIsMenuOpen(false)
    }

    return (
        <header className={`site-header${isSticky ? " is-sticky" : ""}${isMenuOpen ? " is-menu-open" : ""}`}>
            <div className="logo">
                <a href="#home" aria-label="Great Nine Construction" onClick={(event) => scrollTo(event, "home")}>
                    <img
                        className="logo-svg"
                        src="/great-nine-logo.png"
                        alt="Логотип Great Nine Construction"
                    />
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
                    <li>
                        <a href="#home" onClick={(event) => scrollTo(event, "home")}>
                            <span className="nav-text">Главная</span>
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={(event) => scrollTo(event, "about")}>
                            <span className="nav-text">О нас</span>
                        </a>
                    </li>
                    <li>
                        <a href="#services" onClick={(event) => scrollTo(event, "services")}>
                            <span className="nav-text">Услуги</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={(event) => scrollTo(event, "projects")}>
                            <span className="nav-text">Проекты</span>
                        </a>
                    </li>
                    <li>
                        <a href="#team" onClick={(event) => scrollTo(event, "team")}>
                            <span className="nav-text">Команда</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(event) => scrollTo(event, "contact")}>
                            <span className="nav-text">Контакты</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="btn-header">
                <button type="button" onClick={(event) => scrollTo(event, "contact")}>Связаться</button>
            </div>
        </header>
    )
}

export default NavBar
