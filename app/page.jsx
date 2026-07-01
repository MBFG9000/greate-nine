import "../src/css/Home.css"

import Home from "../src/views/Home"
import { SITE_URL } from "../src/data/seoData"

export const metadata = {
    alternates: { canonical: "/" },
    openGraph: { url: SITE_URL },
}

export default function HomePage() {
    return <Home />
}
