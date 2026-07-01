import { SITE_URL } from "../src/data/seoData"

export default function robots() {
    return {
        rules: { userAgent: "*", allow: "/" },
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    }
}
