import "../../../css/pages/InnerPage.css"

import { PageHero } from "../../shared/PageHero"

function TurnkeyRepairPage() {
    return (
        <>
            <PageHero
                eyebrow="Услуги"
                title="Ремонт под ключ"
                text="Полный цикл ремонта: черновые работы, чистовая отделка, закупки, координация мастеров и финальная подготовка пространства к использованию."
                image="/great-nine-home-renovation-facade.webp"
                imagePosition="center 42%"
            />
            <section className="inner-placeholder">
                <div className="inner-placeholder-shell">
                    <p>Блок работает</p>
                </div>
            </section>
        </>
    )
}

export default TurnkeyRepairPage
