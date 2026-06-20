export function AboutSection({ isVisible, sectionRef }) {
    return (
        <section className={`about-section${isVisible ? " is-visible" : ""}`} id="about" ref={sectionRef}>
            <div className="about-shell">
                <div className="about-grid">
                    <div className="about-content">
                        <p className="about-kicker">О нас</p>
                        <h2>Строим надежно с 1999 года</h2>
                        <p>
                            Duron Construction - подрядчик полного цикла, которому доверяют за прозрачное
                            планирование, надежные сроки и долговечное качество работ. Наша команда ведет каждый
                            проект с понятной коммуникацией, сильной координацией на площадке и ответственным
                            подходом к результату.
                        </p>
                        <a className="about-btn" href="#services">Продолжить</a>
                    </div>
                    <div className="about-image">
                        <img
                            src="/great-nine-team-reviewing-construction-plans.webp"
                            alt="Команда Duron Construction изучает строительные чертежи"
                            width="612"
                            height="408"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
