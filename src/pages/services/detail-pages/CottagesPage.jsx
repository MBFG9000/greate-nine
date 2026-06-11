import "../../../css/pages/InnerPage.css"

import { PageHero } from "../../shared/PageHero"

function CottagesPage() {
    return (
        <>
            <PageHero
                eyebrow="Услуги"
                title="Строительство коттеджей"
                text="Коттеджи для жизни и отдыха с учетом участка, архитектуры, энергоэффективности, инженерных систем и будущего обслуживания дома."
                image="/great-nine-construction-project-management.webp"
                imagePosition="center"
            />
            <section className="inner-placeholder">
                <div className="inner-placeholder-shell">
                    <p>Блок работает</p>
                </div>
            </section>
        </>
    )
}

export default CottagesPage
