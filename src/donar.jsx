import { Navbar, Footer, Transactions, Swap } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
        <div className="gradient-bg-navbar">
        <Navbar />
        </div>
        <div className="gradient-bg-welcome">
        <Swap />
        </div>
        <Transactions />
    <Footer />
  </div>
  )
}

export default App
