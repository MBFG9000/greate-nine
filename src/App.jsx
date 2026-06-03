import { Route, Routes } from "react-router-dom"
import "./css/App.css"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App
