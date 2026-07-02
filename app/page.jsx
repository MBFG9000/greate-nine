import "../src/css/Home.css"
import "../src/css/home/responsive.css"

import Home from "../src/views/Home"
import { SITE_URL } from "../src/data/seoData"

export const metadata = {
    alternates: { canonical: "/" },
    openGraph: { url: SITE_URL },
}

export default function HomePage() {
    return (
        <>
            <Home />
            <style>{`
                @media (min-width: 769px) {
                    .hero-content {
                        width: min(100% - 64px, 1040px);
                        max-width: 1040px;
                        gap: 0.85rem;
                    }

                    .hero-kicker {
                        font-size: 0.82rem;
                    }

                    .hero-title {
                        font-size: clamp(2.8rem, 5vw, 4.6rem);
                    }

                    .hero-subtitle {
                        max-width: 68ch;
                        font-size: clamp(1rem, 1.3vw, 1.25rem);
                        line-height: 1.6;
                    }
                }

                @media (max-width: 768px) {
                    .projects-shell {
                        width: 100%;
                        padding-top: 42px;
                    }

                    .projects-title,
                    .projects-grid {
                        width: min(100% - 28px, 540px);
                        margin-right: auto;
                        margin-left: auto;
                    }

                    .projects-grid {
                        grid-template-columns: 1fr;
                        gap: 14px;
                    }

                    .project-card {
                        min-height: 285px;
                    }

                    .construction-process-shell {
                        width: min(100% - 28px, 540px);
                        padding: 34px 0 62px;
                    }

                    .construction-process-title {
                        margin-bottom: 28px;
                    }

                    .construction-process-path {
                        gap: 14px;
                    }

                    .construction-process-path::before {
                        left: 29px;
                    }

                    .construction-process-step {
                        grid-template-columns: 58px minmax(0, 1fr);
                        gap: 14px;
                        min-height: 0;
                        padding: 0 0 18px;
                    }

                    .construction-process-marker {
                        grid-column: 1;
                        width: 58px;
                        height: 58px;
                        border-width: 5px;
                    }

                    .construction-process-content,
                    .construction-process-step:nth-child(even) .construction-process-content {
                        grid-column: 2;
                        padding: 18px 20px;
                        text-align: left;
                    }

                    .assurance-shell {
                        width: min(100% - 28px, 540px);
                        padding: 34px 0 62px;
                    }

                    .assurance-grid {
                        grid-template-columns: 1fr;
                    }

                    .assurance-card {
                        min-height: 0;
                        padding: 18px;
                    }
                }
            `}</style>
        </>
    )
}
