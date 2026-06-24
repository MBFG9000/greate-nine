import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import "./css/App.css"
import "./css/home/contact.css"

import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import { contactMethods } from "./pages/home/data/homeData"
import { useRevealSections } from "./pages/home/hooks/useRevealSections"
import { ContactSection } from "./pages/home/sections/ContactSection"
import { ConstructionFlowSection } from "./pages/services/components/ServiceStagesSection"
import { commercialBuildingFlowStages } from "./pages/services/data/commercialBuildingsContent"
import { turnkeyRepairFlowStages } from "./pages/services/data/turnkeyRepairContent"
import ServiceDetailPage from "./pages/services/ServiceDetailPage"
import ServicesPage from "./pages/services/ServicesPage"

function App() {
  const location = useLocation()
  const registerRevealSection = useRevealSections()
  const isServicePage = location.pathname === "/services" || location.pathname.startsWith("/services/")
  const isTurnkeyRepairPage = location.pathname === "/services/turnkey-repair"
  const isCommercialBuildingsPage = location.pathname === "/services/commercial-buildings"
  const constructionFlowProps = isTurnkeyRepairPage
    ? {
        stages: turnkeyRepairFlowStages,
        heading: "Как проходит ремонт под ключ",
        lead: "Показываем ключевые контрольные точки ремонта: что происходит на объекте, зачем нужен каждый этап и что проверяется перед переходом дальше.",
        controlLabel: "Контрольная точка",
      }
    : isCommercialBuildingsPage
      ? {
          stages: commercialBuildingFlowStages,
          lead: "Показываем семь последовательных этапов реализации коммерческого объекта: от анализа задач бизнеса до подготовки здания к открытию и эксплуатации.",
          controlLabel: "Контрольная точка",
        }
      : {}

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/projects/*" element={<Navigate to="/#projects" replace />} />
        </Routes>
      </main>
      {isServicePage ? <ConstructionFlowSection {...constructionFlowProps} /> : null}
      {isServicePage ? (
        <ContactSection contactMethods={contactMethods} registerRevealSection={registerRevealSection} />
      ) : null}
      <Footer />
    </>
  )
}

export default App
