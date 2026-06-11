import "../../../css/pages/InnerPage.css"

import { PageHero } from "../../shared/PageHero"

function TurnkeyHouseAlmatyPage() {
    return (
        <>
            <PageHero
                eyebrow="Алматы"
                title="Дом под ключ"
                text="Проект с комплексным ведением от строительной подготовки до готового результата: график, смета, площадка и финальная приемка."
                image="/great-nine-mountain-home-almaty.webp"
                imagePosition="center 58%"
            />
            <section className="inner-placeholder">
                <div className="inner-placeholder-shell">
                    <p>Блок работает</p>
                </div>
            </section>
        </>
    )
}

export default TurnkeyHouseAlmatyPage
