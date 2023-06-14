import React from "react"
import { Presentation, Resistances, CalculsResistances, CalculsCondensateurs, RLCFiltre } from "./components"

const App = () => {
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center bg-bg-elec">
        <Presentation />
      </div>

    
      <div className="bg-[#03071e]">
        <Resistances />

        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-2">
              <CalculsResistances />
            </div>
            <div className="md:w-1/2 md:pl-2">
              <CalculsCondensateurs />
            </div>
          </div>
        </div>
      </div>

      <RLCFiltre />
    </>
  )
}

export default App
