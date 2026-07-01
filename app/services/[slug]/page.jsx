import { notFound } from "next/navigation"

import JsonLd from "../../../src/components/JsonLd"
import ServicePageFooter from "../../../src/components/ServicePageFooter"
import { getServiceUrl, ORGANIZATION_ID, serviceSeo, SITE_NAME, SITE_URL } from "../../../src/data/seoData"
import CommercialBuildingsPage from "../../../src/views/services/detail-pages/CommercialBuildingsPage"
import CottagesPage from "../../../src/views/services/detail-pages/CottagesPage"
import PrivateHousesPage from "../../../src/views/services/detail-pages/PrivateHousesPage"
import TurnkeyRepairPage from "../../../src/views/services/detail-pages/TurnkeyRepairPage"
import { commercialBuildingFlowStages } from "../../../src/views/services/data/commercialBuildingsContent"
import { turnkeyRepairFlowStages } from "../../../src/views/services/data/turnkeyRepairContent"

const servicePages = {
    "private-houses": {
        component: PrivateHousesPage,
    },
    "commercial-buildings": {
        component: CommercialBuildingsPage,
        flowProps: {
            stages: commercialBuildingFlowStages,
            lead: "Показываем семь последовательных этапов реализации коммерческого объекта: от анализа задач бизнеса до подготовки здания к открытию и эксплуатации.",
            controlLabel: "Контрольная точка",
        },
    },
    "turnkey-repair": {
        component: TurnkeyRepairPage,
        flowProps: {
            stages: turnkeyRepairFlowStages,
            heading: "Как проходит ремонт под ключ",
            lead: "Показываем ключевые контрольные точки ремонта: что происходит на объекте, зачем нужен каждый этап и что проверяется перед переходом дальше.",
            controlLabel: "Контрольная точка",
        },
    },
    cottages: {
        component: CottagesPage,
    },
}

export function generateStaticParams() {
    return Object.keys(servicePages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const service = serviceSeo[slug]

    if (!service) return {}

    const url = getServiceUrl(slug)

    return {
        title: service.title,
        description: service.description,
        alternates: { canonical: `/services/${slug}` },
        openGraph: {
            type: "website",
            title: `${service.title} | ${SITE_NAME}`,
            description: service.description,
            url,
            images: [service.image],
        },
    }
}

export default async function ServiceRoute({ params }) {
    const { slug } = await params
    const page = servicePages[slug]
    const seo = serviceSeo[slug]

    if (!page || !seo) notFound()

    const Page = page.component
    const url = getServiceUrl(slug)
    const structuredData = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${url}#service`,
            name: seo.serviceType,
            description: seo.description,
            url,
            image: `${SITE_URL}${seo.image}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: [
                { "@type": "City", name: "Алматы" },
                { "@type": "AdministrativeArea", name: "Алматинская область" },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Главная", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Услуги", item: `${SITE_URL}/services` },
                { "@type": "ListItem", position: 3, name: seo.serviceType, item: url },
            ],
        },
    ]

    return (
        <>
            <JsonLd data={structuredData} />
            <Page />
            <ServicePageFooter flowProps={page.flowProps} />
        </>
    )
}
