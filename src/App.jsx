import { Route, Routes } from "react-router-dom"
import "./css/App.css"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import ProjectDetailPage from "./pages/projects/ProjectDetailPage"
import ProjectsPage from "./pages/projects/ProjectsPage"
import ServiceDetailPage from "./pages/services/ServiceDetailPage"
import ServicesPage from "./pages/services/ServicesPage"

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
