import "../css/Home.css"

import { useState } from "react"

function Home() {
    const [heroImageLoaded, setHeroImageLoaded] = useState(false)

    return (
        <section className="landing">
            <div className={`bg${heroImageLoaded ? " is-loaded" : ""}`}>
                <img
                    src="/hero-construction.jpg"
                    className="background-img"
                    alt="Construction site at sunrise"
                    width="4000"
                    height="2600"
                    onLoad={() => setHeroImageLoaded(true)}
                    fetchpriority="high"
                />
                <div className="overlay"></div>
                <div className="overlay-2"></div>
                <div className={`hero-content${heroImageLoaded ? " is-loaded" : ""}`}>
                    <p className="hero-kicker">Great Nine Construction</p>
                    <h1 className="hero-title">Great Nine Construction</h1>
                    <p className="hero-subtitle">
                        Building excellence since 1999. We deliver residential and commercial projects with precision,
                        safety, and pride in every detail.
                    </p>
                    <div className="hero-actions">
                        <a className="hero-btn" href="#contact">Get a Consultation</a>
                        <a className="hero-link" href="#projects">View Projects</a>
                    </div>
                </div>
            </div>

            <section className="about-section" id="about">
                <div className="section-shell">
                    <p className="section-kicker">About Us</p>
                    <div className="about-grid">
                        <div className="about-card">
                            <h2>Building Excellence Since 1999</h2>
                            <p>
                                Great Nine Construction is a full-service contractor trusted for transparent
                                planning, reliable timelines, and craftsmanship that lasts.
                            </p>
                            <div className="about-stats">
                                <div>
                                    <span className="stat-number">25+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div>
                                    <span className="stat-number">420+</span>
                                    <span className="stat-label">Projects Delivered</span>
                                </div>
                                <div>
                                    <span className="stat-number">98%</span>
                                    <span className="stat-label">Client Satisfaction</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-image">
                            <img src="/about-construction.png" alt="Team reviewing plans" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section" id="services">
                <div className="section-shell">
                    <p className="section-kicker">Construction Services</p>
                    <h2 className="section-title">Everything you need to build with confidence</h2>
                    <div className="services-grid">
                        <article className="service-card">
                            <h3>Residential Build</h3>
                            <p>Custom homes with premium finishes, built on schedule and within budget.</p>
                        </article>
                        <article className="service-card">
                            <h3>Commercial Build</h3>
                            <p>Offices, retail, and industrial spaces designed for performance and longevity.</p>
                        </article>
                        <article className="service-card">
                            <h3>Renovation</h3>
                            <p>Transformations that upgrade structure, layout, and efficiency.</p>
                        </article>
                        <article className="service-card">
                            <h3>MEP Systems</h3>
                            <p>Integrated mechanical, electrical, and plumbing solutions.</p>
                        </article>
                        <article className="service-card">
                            <h3>Site Development</h3>
                            <p>Surveying, grading, and prep to set your project up for success.</p>
                        </article>
                        <article className="service-card">
                            <h3>Project Management</h3>
                            <p>Clear communication, risk management, and quality control.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="projects-section" id="projects">
                <div className="section-shell">
                    <p className="section-kicker">Completed Projects</p>
                    <h2 className="section-title">A portfolio built on trust</h2>
                    <div className="projects-grid">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div className="project-card" key={index}>
                                <div className="project-image"></div>
                                <div className="project-info">
                                    <h3>Project Name</h3>
                                    <p>Location</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="team-section" id="team">
                <div className="section-shell">
                    <p className="section-kicker">Team Section</p>
                    <h2 className="section-title">People who lead the build</h2>
                    <div className="team-grid">
                        <article className="team-card">
                            <div className="team-avatar"></div>
                            <h3>Project Manager</h3>
                            <p>Schedule, budget, and quality control lead.</p>
                        </article>
                        <article className="team-card">
                            <div className="team-avatar"></div>
                            <h3>Site Engineer</h3>
                            <p>On-site execution and safety coordination.</p>
                        </article>
                        <article className="team-card">
                            <div className="team-avatar"></div>
                            <h3>Architect Lead</h3>
                            <p>Design integrity and client vision alignment.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="contact-section" id="contact">
                <div className="contact-shell">
                    <p className="contact-kicker">Contact us</p>
                    <h2 className="contact-title">Start your project today</h2>
                    <p className="contact-lead">
                        We respond quickly on WhatsApp and email. For urgent requests, call us directly.
                    </p>

                    <div className="contact-cards">
                        <a className="contact-card" href="mailto:hello@greatnine.com">
                            <span className="contact-label">Email</span>
                            <span className="contact-value">hello@greatnine.com</span>
                            <span className="contact-action">Send an email</span>
                        </a>
                        <a className="contact-card" href="tel:+77001234567">
                            <span className="contact-label">Phone</span>
                            <span className="contact-value">+7 (700) 123-45-67</span>
                            <span className="contact-action">Call us</span>
                        </a>
                        <a className="contact-card" href="https://wa.me/77001234567" target="_blank" rel="noopener">
                            <span className="contact-label">WhatsApp</span>
                            <span className="contact-value">+7 700 123-45-67</span>
                            <span className="contact-action">Chat in WhatsApp</span>
                        </a>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home