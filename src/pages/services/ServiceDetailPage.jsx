import { Navigate, useParams } from "react-router-dom"

import CommercialBuildingsPage from "./detail-pages/CommercialBuildingsPage"
import CottagesPage from "./detail-pages/CottagesPage"
import PrivateHousesPage from "./detail-pages/PrivateHousesPage"
import TurnkeyRepairPage from "./detail-pages/TurnkeyRepairPage"

const servicePages = {
    "private-houses": PrivateHousesPage,
    "commercial-buildings": CommercialBuildingsPage,
    "turnkey-repair": TurnkeyRepairPage,
    cottages: CottagesPage,
}

function ServiceDetailPage() {
    const { slug } = useParams()
    const Page = servicePages[slug]

    if (!Page) {
        return <Navigate to="/services" replace />
    }

    return <Page />
}

export default ServiceDetailPage
