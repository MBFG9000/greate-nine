import Link from "next/link"

export default function NotFound() {
    return (
        <section className="page-hero">
            <div className="page-hero-content">
                <p className="page-hero-eyebrow">404</p>
                <h1>Страница не найдена</h1>
                <p>Запрошенная страница не существует или была перемещена.</p>
                <Link className="page-hero-link" href="/">
                    На главную
                </Link>
            </div>
        </section>
    )
}
