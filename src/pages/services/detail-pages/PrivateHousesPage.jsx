import "../../../css/pages/InnerPage.css"

import { PageHero } from "../../shared/PageHero"

function PrivateHousesPage() {
    return (
        <>
            <PageHero
                eyebrow="Услуги"
                title="Строительство частных домов"
                text="Индивидуальные дома для постоянной жизни: планирование участка, архитектура, инженерия, строительные этапы и контроль качества до передачи объекта."
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

export default PrivateHousesPage
