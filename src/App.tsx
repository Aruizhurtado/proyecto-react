import { HashRouter, Routes, Route } from "react-router-dom"
import "./assets/Estilos/App.css"
import Inicio from "./pages/Inicio"
import Modelos from "./pages/Modelos"
import Presupuesto from "./pages/Presupuesto"
import Contacto from "./pages/Contacto"
import PaginaError from "./pages/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

function App() {
  return (

    <HashRouter>
      <Header/>

      <main className="page-content">
        <Routes>

          <Route path="/" element={<Inicio/>} />
          <Route path="/Modelos" element={<Modelos/>} />
          <Route path="/Presupuesto" element={<Presupuesto/>} />
          <Route path="/Contacto" element={<Contacto/>} />
          <Route path="/Error" element={<PaginaError/>} />

        </Routes>
      </main>

      <Footer/>
    </HashRouter>
  )
}

export default App