import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./screens/Home/home"
import Travel from "./screens/Travel/travel"
import Diy from "./screens/DIY/diy"
import Ikea from "./screens/IKEA/ikea"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import NotFound from './screens/NotFound/notfound'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/travel" element={<Travel/>}/>
        <Route path="/ikea" element={<Ikea/>}/>
        <Route path="/diy" element={<Diy/>}/>
        <Route path="*" element={NotFound}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App