import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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

    const scrollTo = (id) => {
        const target = document.getElementById(id)
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        setIsMenuOpen(false)
    }

    return (
        <header className={`site-header${isSticky ? " is-sticky" : ""}${isMenuOpen ? " is-menu-open" : ""}`}>
            <div className="logo">
                <Link to="/" aria-label="Great Nine Construction" onClick={() => setIsMenuOpen(false)}>
                    <img
                        className="logo-svg"
                        src="/great-nine-logo.png"
                        alt="Логотип Great Nine Construction"
                    />
                </Link>
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
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>
                            <span className="nav-text">Главная</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => scrollTo("about")}>
                            <span className="nav-text">О нас</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => scrollTo("services")}>
                            <span className="nav-text">Услуги</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => scrollTo("projects")}>
                            <span className="nav-text">Проекты</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => scrollTo("team")}>
                            <span className="nav-text">Команда</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => scrollTo("contact")}>
                            <span className="nav-text">Контакты</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="btn-header">
                <button type="button" onClick={() => scrollTo("contact")}>Связаться</button>
            </div>
        </header>
    )
}

export default NavBar
