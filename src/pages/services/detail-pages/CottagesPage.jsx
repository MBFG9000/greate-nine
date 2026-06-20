import "../../../css/pages/InnerPage.css"

import { PageHero } from "../../shared/PageHero"
import { CottageVariantsSection } from "../components/CottageVariantsSection"
import { ServiceScenarioSection } from "../components/ServiceScenarioSection"
import { ServiceStagesSection } from "../components/ServiceStagesSection"

function CottagesPage() {
    return (
        <>
            <PageHero
                as="header"
                eyebrow="Услуги"
                title="Строительство коттеджей под ключ в Алматы"
                text="Строим коттеджи под ключ в Алматы и Алматинской области — от проектирования до чистовой отделки. Реализуем современные коттеджи, загородные дома и семейные резиденции по индивидуальным проектам с гарантией качества и соблюдением сроков."
                image="/services/duron-cottage-construction-service-quality-82.webp"
                imagePosition="center"
                imageWidth={1000}
                imageHeight={1000}
            />
            <ServiceScenarioSection />
            <ServiceStagesSection />
            <CottageVariantsSection />
        </>
    )
}

export default CottagesPage
