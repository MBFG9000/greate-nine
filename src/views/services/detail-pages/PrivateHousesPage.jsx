"use client"

import { PageHero } from "../../shared/PageHero"
import { HouseVariantsSection } from "../components/HouseVariantsSection"
import { ServiceScenarioSection } from "../components/ServiceScenarioSection"
import { ServiceStagesSection } from "../components/ServiceStagesSection"

function PrivateHousesPage() {
    return (
        <>
            <PageHero
                eyebrow="Услуги"
                title="Строительство частных домов"
                text="Индивидуальные дома для постоянной жизни: планирование участка, архитектура, инженерия, строительные этапы и контроль качества до передачи объекта."
                image="/duron-construction-private-houses-hero.webp"
                imagePosition="center"
            />
            <ServiceScenarioSection />
            <ServiceStagesSection />
            <HouseVariantsSection />
        </>
    )
}

export default PrivateHousesPage
