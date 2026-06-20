import "../../../css/pages/InnerPage.css"

import { PageHero } from "../../shared/PageHero"
import { CommercialOutcomesSection } from "../components/CommercialOutcomesSection"
import { CommercialTypesSection } from "../components/CommercialTypesSection"
import { ServiceScenarioSection } from "../components/ServiceScenarioSection"
import { ServiceStagesSection } from "../components/ServiceStagesSection"
import { commercialBuildingStages } from "../data/commercialBuildingsContent"

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
            <ServiceScenarioSection />
            <CommercialOutcomesSection />
            <ServiceStagesSection
                stages={commercialBuildingStages}
                heading="Этапы реализации коммерческого объекта"
                lead="От анализа задач бизнеса до подготовки здания к запуску - каждый этап связан с назначением объекта, эксплуатационными нагрузками, бюджетом и согласованным графиком."
            />
            <CommercialTypesSection />
        </>
    )
}

export default CommercialBuildingsPage
