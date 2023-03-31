import React from "react"
import { Presentation, Resistances } from "./components"

const App = () => {
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center bg-bg-elec">
        <Presentation />
      </div>
      <div className="bg-[#03071e]">
        <Resistances />
      </div> 
    </>
  )
}

export default App
