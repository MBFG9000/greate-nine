"use client"

import { contactMethods } from "../views/home/data/homeData"
import { useRevealSections } from "../views/home/hooks/useRevealSections"
import { ContactSection } from "../views/home/sections/ContactSection"
import { ConstructionFlowSection } from "../views/services/components/ServiceStagesSection"

export default function ServicePageFooter({ flowProps = {} }) {
    const registerRevealSection = useRevealSections()

    return (
        <>
            <ConstructionFlowSection {...flowProps} />
            <ContactSection contactMethods={contactMethods} registerRevealSection={registerRevealSection} />
        </>
    )
}
