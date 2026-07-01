"use client"

import { PageHero } from "../../shared/PageHero"
import { RepairVariantsSection } from "../components/RepairVariantsSection"
import { ServiceScenarioSection } from "../components/ServiceScenarioSection"
import { ServiceStagesSection } from "../components/ServiceStagesSection"
import { turnkeyRepairScenarios, turnkeyRepairStages } from "../data/turnkeyRepairContent"

function TurnkeyRepairPage() {
    return (
        <>
            <PageHero
                as="header"
                eyebrow="Услуги"
                title="Ремонт под ключ в Алматы и области"
                text="Выполняем полный цикл ремонтных работ — от демонтажа и черновой отделки до установки сантехники, освещения и финальной сдачи объекта."
                image="/services/duron-turnkey-repair-service-quality-72.webp"
                imagePosition="center 42%"
                imageWidth={1200}
                imageHeight={600}
            />
            <ServiceScenarioSection
                heading="С чего начать ремонт под ключ"
                lead="Подключимся на любом этапе: перед демонтажем, после дизайн-проекта или если ремонт уже начался и нужен контроль."
                items={turnkeyRepairScenarios}
            />
            <ServiceStagesSection
                stages={turnkeyRepairStages}
                heading="Этапы ремонта под ключ"
                lead="От первичного осмотра до финальной сдачи - каждый этап ремонта фиксируется, планируется и проходит контроль качества."
            />
            <RepairVariantsSection />
        </>
    )
}

export default TurnkeyRepairPage
