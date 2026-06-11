import "../../css/pages/InnerPage.css"

import { PageHero } from "../shared/PageHero"

function ServicesPage() {
    return (
        <>
            <PageHero
                eyebrow="Услуги"
                title="Строительные услуги Great Nine Construction"
                text="От частных домов и коттеджей до коммерческих зданий и ремонта под ключ - здесь будет отдельная структура услуг с деталями, этапами и примерами работ."
                image="/great-nine-residential-house-construction.webp"
                imagePosition="center 45%"
            />
            <section className="inner-placeholder">
                <div className="inner-placeholder-shell">
                    <p>Блок работает</p>
                </div>
            </section>
        </>
    )
}

export default ServicesPage
