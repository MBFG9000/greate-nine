import "../../../css/pages/InnerPage.css"

import { PageHero } from "../../shared/PageHero"

function CommercialBuildingsPage() {
    return (
        <>
            <PageHero
                eyebrow="Услуги"
                title="Строительство коммерческих зданий"
                text="Офисы, салоны, торговые и бизнес-пространства с понятным графиком, расчетом нагрузки, координацией подрядчиков и подготовкой к запуску."
                image="/great-nine-commercial-building-construction.webp"
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

export default CommercialBuildingsPage
