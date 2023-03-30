import React from "react"
import SectionWrapper from "../hoc/SectionWrapper"
import { resistance, or, argent } from "../assets"
import { useEffect } from "react"
import { updatePourcentage, updateMultiplier } from "../utils/functions"

const Resistances = () => {
    const rgbCouleurs=[
        "rgba(0, 0, 0, 1)",
        "rgba(165, 42, 42, 1)",
        "rgba(222, 20, 37, 1)",
        "rgba(222, 138, 20, 1)",
        "rgba(250, 250, 17, 1)",
        "rgba(6, 212, 92, 1)",
        "rgba(24, 5, 240, 1)",
        "rgba(172, 15, 219, 1)",
        "rgba(168, 168, 168, 1)",
        "rgba(255, 255, 255, 1)",
    ]
    let anneau1="rgba(165, 42, 42, 1)";
    let anneau2="rgba(165, 42, 42, 1)";
    let anneau3="rgba(165, 42, 42, 1)";
    let anneau4="rgba(165, 42, 42, 1)";
    let valAnn1=1;
    let valAnn2=1;
    let valAnn3=10;
    let valAnn4=1;
    let top=300;
    let left=100;
    
    var elements = [];

    function updateCanvas() {
        let canvas = document.getElementById('resistance');
        let ctx = canvas.getContext('2d');
        
        let newImage = new Image();
        newImage.src = resistance;

        let ohm = (valAnn1*10+valAnn2)*valAnn3;
        console.log(anneau1);

        newImage.onload = () => {
            ctx.drawImage(newImage, 0, 0, 700, 400);

            ctx.fillStyle = anneau1;
            ctx.fillRect(282,159,14,66);
   
            ctx.fillStyle=anneau2;
            ctx.fillRect(309,159,14,66);
   
            ctx.fillStyle=anneau3;
            ctx.fillRect(334,159,14,66);
   
            ctx.fillStyle=anneau4;
            ctx.fillRect(358,159,14,66);

            ctx.fillStyle="#fff"
            ctx.font = "20px Arial";
            if(ohm<1000) 
                ctx.fillText(ohm+" Ω ± "+valAnn4+"%", 300, 273);
            else if(ohm>=1000 && ohm<1000000)
                ctx.fillText(ohm/1000+" kΩ ± "+valAnn4+"%", 300, 273);
            else if(ohm>=1000000 && ohm<1000000000)
                ctx.fillText(ohm/1000000+" MΩ ± "+valAnn4+"%", 300, 273);
            else
                ctx.fillText(ohm/1000000000+" GΩ ± "+valAnn4+"%", 300, 273);
        }

        elements.forEach(function(ele) {
            ctx.fillStyle = ele.colour;
            ctx.fillRect(ele.left, ele.top, ele.width, ele.height);
        });
    }

    // Premier chargement
    useEffect(() => {
        let canvas = document.getElementById('resistance');
        let ctx = canvas.getContext('2d');
        
        let newImage = new Image();
        newImage.src = resistance;

        newImage.onload = () => {
            ctx.drawImage(newImage, 0, 0, 700, 400);

            ctx.fillStyle = anneau1;
            ctx.fillRect(282,159,14,66);
   
            ctx.fillStyle=anneau2;
            ctx.fillRect(309,159,14,66);
   
            ctx.fillStyle=anneau3;
            ctx.fillRect(334,159,14,66);
   
            ctx.fillStyle=anneau4;
            ctx.fillRect(358,159,14,66);

            ctx.fillStyle="#fff"
            ctx.font = "20px Arial";
            ctx.fillText("110 Ω ± 1%", 300, 273);
        }

        var e = document.getElementById('resistance'),
        context = e.getContext('2d');


        // pallete de couleur pour les anneaux
        for(let a=0;a<4;a++) {
            if(a==3) {
                for(let i=0;i<10;i++) {
                    if(i!=0 && i!=3 && i!=4 && i!=9) {
                        elements.push({
                            colour: rgbCouleurs[i],
                            width: 30,
                            height: 20,
                            top: top+40,
                            left: left,
                            indexx: i
                        });
                    }

                    top+=40;
                }
            } else {
                for(let i=0;i<10;i++) {
                    elements.push({
                        colour: rgbCouleurs[i],
                        width: 30,
                        height: 20,
                        top: top+40,
                        left: left,
                        indexx: i
                    });
                    top+=40;
                }
            }
            left+=140;
            top=300;
        }
        // reset des valeurs
        top=300;
        left=100;

        elements.forEach(function(ele) {
            context.fillStyle = ele.colour;
            context.fillRect(ele.left, ele.top, ele.width, ele.height);
        });

        function getMousePosition(canvas, event) {
            let rect = canvas.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            console.log("Coordinate x: " + x, 
                        "Coordinate y: " + y);

            elements.some(function(ele) {
                if (y > ele.top && y < (ele.top + ele.height) && x > ele.left && x < (ele.left + ele.width)) {

                    //1ere anneau
                    if(x>70 && x<130) {
                        anneau1=ele.colour;
                        valAnn1=ele.indexx;
                    } else if(x>210 && x< 270) { // 2eme anneau
                        anneau2=ele.colour;
                        valAnn2=ele.indexx;
                    } else if(x>350 && x<410) { // 3eme anneau
                        anneau3=ele.colour;
                        valAnn3=updateMultiplier(ele.indexx);
                    } else if(x>490 && x<550) { // 4eme anneau
                        anneau4=ele.colour;
                        
                        valAnn4=updatePourcentage(ele.indexx);
                    }
                    const context = canvas.getContext('2d');
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    
                    updateCanvas();
                }
            });
        }
      
        let canvasElem = document.querySelector("canvas");
          
        canvasElem.addEventListener("mousedown", function(e)
        {
            getMousePosition(canvasElem, e);
        });
    })
    // fin premier chargement

    // retour du composant
    return (
        <>
            <div>
                <div className="text-white">Resistances</div>
                <canvas id="resistance" width="700" height="800px" className="m-auto border-4 border-indigo-600">
                    Ton navigateur ne supporte pas les balises canvas.
                </canvas>

            </div>
            
        </>
    )
}

export default SectionWrapper(Resistances,"")