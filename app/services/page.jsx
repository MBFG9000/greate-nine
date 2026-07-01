import ServicePageFooter from "../../src/components/ServicePageFooter"
import { SITE_URL } from "../../src/data/seoData"
import ServicesPage from "../../src/views/services/ServicesPage"

export const metadata = {
    title: "Строительные услуги",
    description: "Строительство частных домов, коттеджей и коммерческих объектов, а также ремонт под ключ в Алматы.",
    alternates: { canonical: "/services" },
    openGraph: {
        title: "Строительные услуги Duron Construction",
        description: "Строительство частных домов, коттеджей и коммерческих объектов, а также ремонт под ключ в Алматы.",
        url: `${SITE_URL}/services`,
        images: ["/great-nine-residential-house-construction.webp"],
    },
}

export default function ServicesRoute() {
    return (
        <>
            <ServicesPage />
            <ServicePageFooter />
        </>
    )
}
