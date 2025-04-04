import Footer from "./components/Footer"
import NavBarMetering from "./components/NavBarMetering"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Meters from "./components/Meters"
import Logout from "./components/Logout"
import Login from "./components/Login"
import MarketPriceGraph from "./components/MarketPriceGraph"


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBarMetering/>
          <Routes>
            <Route path="/consumptions" element={<MarketPriceGraph/>}/>
            <Route path="/meters" element={<Meters/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
