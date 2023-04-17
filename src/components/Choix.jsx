import React from "react"
import { choix } from "../constantes"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"
import SectionWrapper from "../hoc/SectionWrapper"

const Choix = () => {
    return (
        <>
            <div className="text-center text-orange-600 text-[1.2vw]">
                <ul>
                    <li><a href="resistances">Resistances</a></li>
                    <li><a href="condensateurs">Condensateurs</a></li>
                </ul>
            </div>
        </>
    )
}

export default SectionWrapper(Choix,"")