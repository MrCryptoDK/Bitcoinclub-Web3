import { Header, Navbar, Welcome, Footer, Services, Transactions, Swap, Donaciones, Loteria} from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen">
      <div>
      <Header />
      <Navbar />
      </div>

      <Routes>
        <Route path="/"  element={<Welcome />} />
        <Route path="/Enviar"  element={<Welcome />} />
        <Route path="/Swap"  element={<Swap />} />
        <Route path="/Loteria"  element={<Loteria />} />
        <Route path="/Donaciones"  element={<Donaciones />} />
        <Route path="/Tutoriales"  element={<Welcome />} />
      </Routes>

      <Services />
      <Transactions />
      <div>
      <Footer />
      </div>
  </div>
  )
}

export default App

//<Route path="*"  element={<h1>NotFound</h1>} />