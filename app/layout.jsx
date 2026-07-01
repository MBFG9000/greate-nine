import Script from "next/script"

import "../src/css/index.css"
import "../src/css/App.css"
import "../src/css/Navbar.css"
import "../src/css/Footer.css"

import Footer from "../src/components/Footer"
import JsonLd from "../src/components/JsonLd"
import NavBar from "../src/components/NavBar"
import ScrollToTop from "../src/components/ScrollToTop"
import { ORGANIZATION_ID, SITE_NAME, SITE_URL } from "../src/data/seoData"

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Duron Construction | Строительство домов и коммерческих объектов в Алматы",
        template: "%s | Duron Construction",
    },
    description:
        "Duron Construction строит частные дома и коммерческие объекты с прозрачным планированием, контролем качества и надежными сроками.",
    icons: {
        icon: "/duron-construction-logo.svg",
        apple: "/duron-construction-logo.png",
    },
    openGraph: {
        type: "website",
        locale: "ru_KZ",
        siteName: SITE_NAME,
        title: "Duron Construction | Строительство домов и коммерческих объектов в Алматы",
        description:
            "Duron Construction строит частные дома и коммерческие объекты с прозрачным планированием, контролем качества и надежными сроками.",
        url: SITE_URL,
        images: [{ url: "/great-nine-construction-hero.webp", width: 1600, height: 900 }],
    },
    twitter: {
        card: "summary_large_image",
        images: ["/great-nine-construction-hero.webp"],
    },
}

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "LocalBusiness"],
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/duron-construction-logo.png`,
    image: `${SITE_URL}/great-nine-construction-hero.webp`,
    telephone: ["+77072399839", "+77076737782"],
    address: {
        "@type": "PostalAddress",
        streetAddress: "Улица Саяна Шаймерденова, 12",
        addressLocality: "Алматы",
        addressCountry: "KZ",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 43.201307,
        longitude: 76.853032,
    },
    hasMap: "https://2gis.kz/almaty/geo/9430047375017219/76.853032,43.201307",
    areaServed: [
        { "@type": "City", name: "Алматы" },
        { "@type": "AdministrativeArea", name: "Алматинская область" },
    ],
}

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <head>
                <link
                    rel="preload"
                    as="font"
                    href="/font/Manrope-VariableFont_wght.ttf"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    as="image"
                    href="/duron-construction-hero-section-poster.webp"
                    imageSrcSet="/duron-construction-hero-section-poster-960.webp 960w, /duron-construction-hero-section-poster.webp 1600w"
                    imageSizes="100vw"
                    type="image/webp"
                    fetchPriority="high"
                />
            </head>
            <body>
                <JsonLd data={organizationSchema} />
                <Script id="google-tag-manager" strategy="lazyOnload">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KNDQPB56');`}
                </Script>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-KNDQPB56"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>
                <div id="root">
                    <ScrollToTop />
                    <NavBar />
                    <main className="main-content">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
