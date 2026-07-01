import { SEO_LAST_UPDATED, serviceSeo, SITE_URL } from "../src/data/seoData"

export default function sitemap() {
    const lastModified = new Date(SEO_LAST_UPDATED)
    const staticPages = [
        { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
        { url: `${SITE_URL}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ]
    const servicePages = Object.keys(serviceSeo).map((slug) => ({
        url: `${SITE_URL}/services/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
    }))

    return [...staticPages, ...servicePages]
}
