import React from "react"
import SectionWrapper from "../hoc/SectionWrapper"

const Presentation = () => {
    return (
        <div className="flex-auto w-full h-screen">
            <div className="text-white  text-center pt-[26%] sm:text-[40px] text-[20px] font-poppins font-semibold	text-shadow-presentation">
                Bienvenu(e) sur <span className="text-[#faff00]">Elec'App</span>
                <p className="text-[#e3e3e3] sm:text-[18px] text-[14px] sm:mt-20 mt-2 font-normal">Cette application permet de faciliter le travail en projet d'étudiants en génie électrique.</p>
            </div>
        </div>
    )
}

export default Presentation