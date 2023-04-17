import React from "react"
import { Presentation, Resistances, Choix } from "./components"

import { BrowserRouter } from "react-router-dom"
import { Routes,Route } from "react-router-dom"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="bg-cover bg-no-repeat bg-center bg-bg-elec">
        <Presentation />
      </div>

      <Routes>
        <Route path="/" element={
          <div className="bg-[#03071e]">
            <Resistances />
          </div> 
        } />
        <Route path="/resistances" element={
          <div className="bg-[#03071e]">
            <Resistances />
          </div> 
        } />
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
