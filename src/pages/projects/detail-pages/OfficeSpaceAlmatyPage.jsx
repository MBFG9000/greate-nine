import "../../../css/pages/InnerPage.css"

import { PageHero } from "../../shared/PageHero"

function OfficeSpaceAlmatyPage() {
    return (
        <>
            <PageHero
                eyebrow="Алматы"
                title="Офисное пространство"
                text="Рабочее пространство с акцентом на функциональность, визуальную цельность и готовность помещения к ежедневному использованию командой."
                image="/great-nine-office-showroom-almaty.webp"
                imagePosition="center 35%"
            />
            <section className="inner-placeholder">
                <div className="inner-placeholder-shell">
                    <p>Блок работает</p>
                </div>
            </section>
        </>
    )
}

export default OfficeSpaceAlmatyPage
