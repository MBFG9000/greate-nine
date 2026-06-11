import { Link } from "react-router-dom"

export function PageHero({ eyebrow, title, text, image, imagePosition = "center" }) {
    return (
        <section className="page-hero">
            <img
                className="page-hero-image"
                src={image}
                alt=""
                aria-hidden="true"
                style={{ objectPosition: imagePosition }}
                width="1600"
                height="900"
                loading="eager"
                decoding="async"
            />
            <div className="page-hero-overlay"></div>
            <div className="page-hero-content">
                <p className="page-hero-eyebrow">{eyebrow}</p>
                <h1>{title}</h1>
                <p>{text}</p>
                <Link className="page-hero-link" to="/">
                    На главную
                </Link>
            </div>
        </section>
    )
}
