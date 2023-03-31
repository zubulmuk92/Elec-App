import React from "react"
import SectionWrapper from "../hoc/SectionWrapper"
import Lottie from "react-lottie"
import animationData from "../assets/lottie/scroll-down-arrow.json"

const Presentation = () => {
    const defaultOptions = {
        loop:true,
        autoplay:true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    return (
        <div className="flex-auto w-full h-screen">
            <div className="text-white  text-center pt-[10%] sm:text-[40px] text-[20px] font-poppins font-semibold	text-shadow-presentation pt-[30vh]">
                Bienvenu(e) sur <span className="text-[#faff00]">Elec'App</span>
                <p className="text-[#e3e3e3] sm:text-[18px] text-[14px] sm:mt-20 mt-20 font-normal">Cette application permet de faciliter le travail en projet d'étudiants en génie électrique.</p>
            <div className="pt-[35vh]">
                <a href="#resistances">
                    <Lottie 
                        options={defaultOptions}
                        height={100}
                        width={100}
                    />
                </a>  
            </div>
            </div>
        </div>
    )
}

export default Presentation