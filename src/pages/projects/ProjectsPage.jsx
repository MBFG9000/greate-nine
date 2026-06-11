import "../../css/pages/InnerPage.css"

import { PageHero } from "../shared/PageHero"

function ProjectsPage() {
    return (
        <>
            <PageHero
                eyebrow="Проекты"
                title="Реализованные проекты"
                text="Здесь будет страница портфолио с завершенными объектами, географией работ, фотографиями, описанием задач и результатами по каждому проекту."
                image="/great-nine-private-villa-almaty.webp"
                imagePosition="center 38%"
            />
            <section className="inner-placeholder">
                <div className="inner-placeholder-shell">
                    <p>Блок работает</p>
                </div>
            </section>
        </>
    )
}

export default ProjectsPage
