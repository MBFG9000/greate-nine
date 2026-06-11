import "../../../css/pages/InnerPage.css"

import { PageHero } from "../../shared/PageHero"

function PrivateVillaAlmatyPage() {
    return (
        <>
            <PageHero
                eyebrow="Алматы"
                title="Частная вилла"
                text="Индивидуальный жилой объект с акцентом на архитектуру, приватность, качество узлов и понятную координацию строительных этапов."
                image="/great-nine-private-villa-almaty.webp"
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

export default PrivateVillaAlmatyPage
