"use client"

import {
    assuranceCards,
    certificateSlides,
    contactMethods,
    constructionProcess,
    projects,
    services,
    statistics,
    structuralAdvantages,
    videoTestimonials,
} from "./home/data/homeData"
import { useAnimatedNumbers } from "./home/hooks/useAnimatedNumbers"
import { useDelayedHeroVideo } from "./home/hooks/useDelayedHeroVideo"
import { useInViewFlag } from "./home/hooks/useInViewFlag"
import { useRevealSections } from "./home/hooks/useRevealSections"
import { showDeferredHomeSections } from "./home/config/homeSections"
import { AboutSection } from "./home/sections/AboutSection"
import { AdvantagesSection } from "./home/sections/AdvantagesSection"
import { AssuranceSection } from "./home/sections/AssuranceSection"
import { CertificatesSection } from "./home/sections/CertificatesSection"
import { ConstructionProcessSection } from "./home/sections/ConstructionProcessSection"
import { ContactSection } from "./home/sections/ContactSection"
import { HeroSection } from "./home/sections/HeroSection"
import { ProcessVideoSection } from "./home/sections/ProcessVideoSection"
import { ProjectsSection } from "./home/sections/ProjectsSection"
import { ServicesSection } from "./home/sections/ServicesSection"
import { StatisticsSection } from "./home/sections/StatisticsSection"
import { TeamSection } from "./home/sections/TeamSection"
import { VideoTestimonialsSection } from "./home/sections/VideoTestimonialsSection"

function Home() {
    const shouldLoadHeroVideo = useDelayedHeroVideo()
    const registerRevealSection = useRevealSections()
    const [aboutSectionRef, aboutVisible] = useInViewFlag({ threshold: 0.3 })
    const [statisticsSectionRef, statisticsVisible] = useInViewFlag({ threshold: 0.35 })
    const [processVideoSectionRef, shouldLoadProcessVideo] = useInViewFlag({
        rootMargin: "360px 0px",
        threshold: 0,
    })
    const statNumbers = useAnimatedNumbers(statistics, statisticsVisible)

    return (
        <section className="home-hero-section" id="home">
            <HeroSection shouldLoadHeroVideo={shouldLoadHeroVideo} />
            <AboutSection isVisible={aboutVisible} sectionRef={aboutSectionRef} />
            <StatisticsSection
                isVisible={statisticsVisible}
                numbers={statNumbers}
                sectionRef={statisticsSectionRef}
                statistics={statistics}
            />
            <ServicesSection registerRevealSection={registerRevealSection} services={services} />
            <AdvantagesSection advantages={structuralAdvantages} registerRevealSection={registerRevealSection} />
            <ProcessVideoSection
                registerRevealSection={registerRevealSection}
                sectionRef={processVideoSectionRef}
                shouldLoadVideo={shouldLoadProcessVideo}
            />
            <ProjectsSection projects={projects} registerRevealSection={registerRevealSection} />
            {showDeferredHomeSections ? <VideoTestimonialsSection testimonials={videoTestimonials} /> : null}
            <ConstructionProcessSection
                constructionProcess={constructionProcess}
                registerRevealSection={registerRevealSection}
            />
            <AssuranceSection
                assuranceCards={assuranceCards}
                hasCertificates={showDeferredHomeSections}
                registerRevealSection={registerRevealSection}
            />
            {showDeferredHomeSections ? <CertificatesSection certificates={certificateSlides} /> : null}
            {showDeferredHomeSections ? <TeamSection /> : null}
            <ContactSection contactMethods={contactMethods} registerRevealSection={registerRevealSection} />
        </section>
    )
}

export default Home
