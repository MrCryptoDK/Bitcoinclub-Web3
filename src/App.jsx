import { Header, Navbar, Enviar, Form, Form2, Footer, Redes, Swap, Donaciones, Loteria, Tutoriales } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen">
      <div>
      <Header />
      <Navbar />
      </div>
      <Redes />
      <Routes>
        <Route path="/"  element={<Enviar />} />
        <Route path="/Enviar"  element={<Enviar />} />
        <Route path="/Swap"  element={<Swap />} />
        <Route path="/Loteria"  element={<Loteria />} />
        <Route path="/Donaciones"  element={<Donaciones />} />
        <Route path="/Tutoriales"  element={<Tutoriales />} />
      </Routes>
      <div>
      <Footer />
      </div>
  </div>
  )
}

export default App

//<Route path="*"  element={<h1>NotFound</h1>} />