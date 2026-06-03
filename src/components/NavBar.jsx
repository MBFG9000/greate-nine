import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../css/Navbar.css"

function NavBar() {
    const [isSticky, setIsSticky] = useState(false)

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
    }

    return (
        <header className={`site-header${isSticky ? " is-sticky" : ""}`}>
            <div className="logo">
                <Link to="/" aria-label="Great Nine Construction">
                    <img
                        className="logo-svg"
                        src="/great-nine-logo.png"
                        alt="Great Nine Construction logo"
                    />
                </Link>
            </div>
            <nav aria-label="Main">
                <ul>
                    <li>
                        <Link to="/">
                            <span className="nav-text">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => scrollTo("about")}>
                            <span className="nav-text">About Us</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => scrollTo("services")}>
                            <span className="nav-text">Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => scrollTo("projects")}>
                            <span className="nav-text">Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => scrollTo("team")}>
                            <span className="nav-text">Team</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onClick={() => scrollTo("contact")}>
                            <span className="nav-text">Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="btn-header">
                <button type="button" onClick={() => scrollTo("contact")}>Get in Touch</button>
            </div>
        </header>
    )
}

export default NavBar