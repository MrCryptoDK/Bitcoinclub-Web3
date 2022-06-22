import { Navbar, Welcome, Footer, Services, Transactions, Swap, Swap2, Dice } from "./components";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen">
        <div className="gradient-bg-navbar">
        <Navbar />
        </div>
    <div className="gradient-bg-welcome">
      <Header />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
    <div className="gradient-bg-welcome">
    <Swap />
    </div>
    <div className="gradient-bg-welcome">
    <Swap2 />
    </div>
    <div className="gradient-bg-welcome">
    <Dice />
    </div>
  </div>
  )
}

export default App
