import { PageHero } from "../shared/PageHero"
import { ServiceScenarioSection } from "./components/ServiceScenarioSection"
import { ServiceStagesSection } from "./components/ServiceStagesSection"

function ServicesPage() {
    return (
        <>
            <PageHero
                eyebrow="Услуги"
                title="Строительные услуги Duron Construction"
                text="От частных домов и коттеджей до коммерческих зданий и ремонта под ключ - здесь будет отдельная структура услуг с деталями, этапами и примерами работ."
                image="/great-nine-residential-house-construction.webp"
                imagePosition="center 45%"
            />
            <ServiceScenarioSection />
            <ServiceStagesSection />
        </>
    )
}

export default ServicesPage
