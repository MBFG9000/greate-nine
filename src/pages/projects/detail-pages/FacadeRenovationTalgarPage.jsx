import "../../../css/pages/InnerPage.css"

import { PageHero } from "../../shared/PageHero"

function FacadeRenovationTalgarPage() {
    return (
        <>
            <PageHero
                eyebrow="Талгар"
                title="Реконструкция фасада"
                text="Обновление фасада с учетом существующей конструкции, визуального результата, долговечности материалов и аккуратного исполнения."
                image="/great-nine-facade-renovation-talgar.webp"
                imagePosition="center 40%"
            />
            <section className="inner-placeholder">
                <div className="inner-placeholder-shell">
                    <p>Блок работает</p>
                </div>
            </section>
        </>
    )
}

export default FacadeRenovationTalgarPage
