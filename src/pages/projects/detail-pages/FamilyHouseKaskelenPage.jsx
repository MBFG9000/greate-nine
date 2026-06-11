import "../../../css/pages/InnerPage.css"

import { PageHero } from "../../shared/PageHero"

function FamilyHouseKaskelenPage() {
    return (
        <>
            <PageHero
                eyebrow="Каскелен"
                title="Загородный дом"
                text="Семейный дом за городом с практичной планировкой, надежными инженерными решениями и строительством под ежедневную эксплуатацию."
                image="/great-nine-family-house-kaskelen.webp"
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

export default FamilyHouseKaskelenPage
