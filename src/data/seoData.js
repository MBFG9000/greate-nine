export const SITE_URL = "https://www.duronconstruction.kz"
export const SITE_NAME = "Duron Construction"
export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const SEO_LAST_UPDATED = "2026-07-01"

export const serviceSeo = {
    "private-houses": {
        title: "Строительство частных домов в Алматы",
        description:
            "Строительство частных домов в Алматы: проектирование, инженерные системы, строительные работы и контроль качества до передачи объекта.",
        serviceType: "Строительство частных домов",
        image: "/duron-construction-private-houses-hero.webp",
    },
    "commercial-buildings": {
        title: "Строительство коммерческих зданий в Алматы",
        description:
            "Строительство офисов, ресторанов, торговых и коммерческих зданий в Алматы с планированием бюджета, сроков и эксплуатационных нагрузок.",
        serviceType: "Строительство коммерческих зданий",
        image: "/great-nine-commercial-building-construction.webp",
    },
    "turnkey-repair": {
        title: "Ремонт под ключ в Алматы и области",
        description:
            "Полный цикл ремонта под ключ в Алматы и области: планирование, черновые и чистовые работы, контроль качества и сдача объекта.",
        serviceType: "Ремонт под ключ",
        image: "/services/duron-turnkey-repair-service-quality-72.webp",
    },
    cottages: {
        title: "Строительство коттеджей под ключ в Алматы",
        description:
            "Строительство коттеджей под ключ в Алматы и Алматинской области: от проектирования и инженерии до отделки и передачи объекта.",
        serviceType: "Строительство коттеджей под ключ",
        image: "/services/duron-cottage-construction-service-quality-82.webp",
    },
}

export function getServiceUrl(slug) {
    return `${SITE_URL}/services/${slug}`
}
