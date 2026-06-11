import { Navigate, useParams } from "react-router-dom"

import CommercialProjectAstanaPage from "./detail-pages/CommercialProjectAstanaPage"
import FacadeRenovationTalgarPage from "./detail-pages/FacadeRenovationTalgarPage"
import FamilyHouseKaskelenPage from "./detail-pages/FamilyHouseKaskelenPage"
import OfficeSpaceAlmatyPage from "./detail-pages/OfficeSpaceAlmatyPage"
import PrivateVillaAlmatyPage from "./detail-pages/PrivateVillaAlmatyPage"
import TurnkeyHouseAlmatyPage from "./detail-pages/TurnkeyHouseAlmatyPage"

const projectPages = {
    "private-villa-almaty": PrivateVillaAlmatyPage,
    "family-house-kaskelen": FamilyHouseKaskelenPage,
    "commercial-project-astana": CommercialProjectAstanaPage,
    "turnkey-house-almaty": TurnkeyHouseAlmatyPage,
    "facade-renovation-talgar": FacadeRenovationTalgarPage,
    "office-space-almaty": OfficeSpaceAlmatyPage,
}

function ProjectDetailPage() {
    const { slug } = useParams()
    const Page = projectPages[slug]

    if (!Page) {
        return <Navigate to="/projects" replace />
    }

    return <Page />
}

export default ProjectDetailPage
