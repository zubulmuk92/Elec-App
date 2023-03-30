import React from "react"
import { Choix, Presentation, Resistances } from "./components"

const App = () => {
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center bg-bg-elec">
        <Presentation />
      </div>
      <div className="bg-resistances">
        <Resistances />
      </div>
      
    </>
  )
}

export default App
