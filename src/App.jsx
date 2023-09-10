import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./screens/Home/home"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import NotFound from './screens/NotFound/notfound'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={NotFound}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App