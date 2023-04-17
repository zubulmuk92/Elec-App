import React from "react"
import SectionWrapper from "../hoc/SectionWrapper"
import { resistance, or, argent } from "../assets"
import { useEffect } from "react"
import { updatePourcentage, updateMultiplier } from "../utils/functions"

const Resistances = () => {

    const isMobile = window.innerWidth <= 768;
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

        newImage.onload = () => {
            if(!isMobile) {
                ctx.drawImage(newImage, 0, 0, 700, 400);

                ctx.fillStyle = anneau1;
                ctx.fillRect(282,159,14,66);
       
                ctx.fillStyle=anneau2;
                ctx.fillRect(309,159,14,66);
                
                if (valAnn3==0.1) {
                    ctx.drawImage(orImage,334,159,14,66)
                } else if (valAnn3==0.01) {
                    ctx.drawImage(argentImage,334,159,14,66)
                } else {
                    ctx.fillStyle=anneau3;
                    ctx.fillRect(334,159,14,66);
                }

                if (valAnn4==5) {
                    ctx.drawImage(orImage,358,159,14,66)
                } else if (valAnn4==10) {
                    ctx.drawImage(argentImage,358,159,14,66)
                } else {
                    ctx.fillStyle=anneau4;
                    ctx.fillRect(358,159,14,66);
                }

                ctx.fillStyle="#fff"
                ctx.font = "20px Arial";
                if(ohm<1000) 
                    ctx.fillText((ohm).toFixed(2)+" Ω ± "+valAnn4+"%", 300, 273);
                else if(ohm>=1000 && ohm<1000000)
                    ctx.fillText((ohm/1000).toFixed(2)+" kΩ ± "+valAnn4+"%", 300, 273);
                else if(ohm>=1000000 && ohm<1000000000)
                    ctx.fillText((ohm/1000000).toFixed(2)+" MΩ ± "+valAnn4+"%", 300, 273);
                else
                    ctx.fillText((ohm/1000000000).toFixed(2)+" GΩ ± "+valAnn4+"%", 300, 273);
            } else {
                ctx.drawImage(newImage, 0, 0, 300, 200);

                ctx.fillStyle = anneau1;
                ctx.fillRect(121,80,5,33);

                ctx.fillStyle=anneau2;
                ctx.fillRect(132,80,6,33);

                if (valAnn3==0.1) {
                    ctx.drawImage(orImage,143,80,6,33)
                } else if (valAnn3==0.01) {
                    ctx.drawImage(argentImage,143,80,6,33)
                } else {
                    ctx.fillStyle=anneau3;
                    ctx.fillRect(143,80,6,33);
                }

                if (valAnn4==5) {
                    ctx.drawImage(orImage,154,80,6,33)
                } else if (valAnn4==10) {
                    ctx.drawImage(argentImage,154,80,6,33)
                } else {
                    ctx.fillStyle=anneau4;
                    ctx.fillRect(154,80,6,33);
                }

                ctx.fillStyle="#fff"
                ctx.font = "16px Arial";
                if(ohm<1000) 
                    ctx.fillText((ohm).toFixed(2)+" Ω ± "+valAnn4+"%", 110, 150);
                else if(ohm>=1000 && ohm<1000000)
                    ctx.fillText((ohm/1000).toFixed(2)+" kΩ ± "+valAnn4+"%", 110, 150);
                else if(ohm>=1000000 && ohm<1000000000)
                    ctx.fillText((ohm/1000000).toFixed(2)+" MΩ ± "+valAnn4+"%", 110, 150);
                else
                    ctx.fillText((ohm/1000000000).toFixed(2)+" GΩ ± "+valAnn4+"%", 110, 150);
            }    
        }

        let orImage = new Image();
        orImage.src=or;
        let argentImage = new Image();
        argentImage.src=argent;

        argentImage.onload = () => {
            elements.forEach(function(ele) {
                if(ele.indexx==10 || ele.indexx==11) {
                    if(ele.indexx==10) {
                        ctx.drawImage(argentImage,ele.left, ele.top, ele.width, ele.height);
                        
                    } else {
                        ctx.drawImage(orImage,ele.left, ele.top, ele.width, ele.height);
                    }    
                } else {
                    ctx.fillStyle = ele.colour;
                    ctx.fillRect(ele.left, ele.top, ele.width, ele.height);
                }
            });
        }
    }

    // Premier chargement
    useEffect(() => {
        let canvas = document.getElementById('resistance');
        let ctx = canvas.getContext('2d');
        
        let newImage = new Image();
        newImage.src = resistance;

        newImage.onload = () => {
            if(!isMobile) {
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
            } else {
                ctx.drawImage(newImage, 0, 0, 300, 200);

                ctx.fillStyle = anneau1;
                ctx.fillRect(121,80,5,33);
    
                ctx.fillStyle=anneau2;
                ctx.fillRect(132,80,6,33);
    
                ctx.fillStyle=anneau3;
                ctx.fillRect(143,80,6,33);
    
                ctx.fillStyle=anneau4;
                ctx.fillRect(154,80,6,33);

                ctx.fillStyle="#fff"
                ctx.font = "16px Arial";
                ctx.fillText("110 Ω ± 1%", 110, 150);
            }
            
        }

        var e = document.getElementById('resistance'),
        context = e.getContext('2d');

        if(!isMobile) {
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
                    elements.push({
                        colour: "argent",
                        width: 30,
                        height: 20,
                        top: top+40,
                        left: left,
                        indexx: 10
                    });
                    top+=40;
                    elements.push({
                        colour: "or",
                        width: 30,
                        height: 20,
                        top: top+40,
                        left: left,
                        indexx: 11
                    });
                } else if(a==2) {
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
                    elements.push({
                        colour: "argent",
                        width: 30,
                        height: 20,
                        top: top+40,
                        left: left,
                        indexx: 10
                    });
                    top+=40;
                    elements.push({
                        colour: "or",
                        width: 30,
                        height: 20,
                        top: top+40,
                        left: left,
                        indexx: 11
                    });
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
        } else {
            // pallete de couleur pour les anneaux
            top=120;
            left=40;
            for(let a=0;a<4;a++) {
                if(a==3) {
                    for(let i=0;i<10;i++) {
                        if(i!=0 && i!=3 && i!=4 && i!=9) {
                            elements.push({
                                colour: rgbCouleurs[i],
                                width: 40,
                                height: 20,
                                top: top+40,
                                left: left,
                                indexx: i
                            });
                        }
                        top+=40;
                    }
                    elements.push({
                        colour: "argent",
                        width: 40,
                        height: 20,
                        top: top+40,
                        left: left,
                        indexx: 10
                    });
                    top+=40;
                    elements.push({
                        colour: "or",
                        width: 40,
                        height: 20,
                        top: top+40,
                        left: left,
                        indexx: 11
                    });
                } else {
                    for(let i=0;i<10;i++) {
                        elements.push({
                            colour: rgbCouleurs[i],
                            width: 40,
                            height: 20,
                            top: top+40,
                            left: left,
                            indexx: i
                        });
                        top+=40;
                    }
                }
                left+=60;
                top=120;
            }
            // reset des valeurs
            top=120;
            left=40;
        }

        let orImage = new Image();
        orImage.src=or;
        let argentImage = new Image();
        argentImage.src=argent;

        argentImage.onload = () => {
            elements.forEach(function(ele) {
                if(ele.indexx==10 || ele.indexx==11) {
                    if(ele.indexx==10) {
                        context.drawImage(argentImage,ele.left, ele.top, ele.width, ele.height);
                        
                    } else {
                        context.drawImage(orImage,ele.left, ele.top, ele.width, ele.height);
                    }    
                } else {
                    context.fillStyle = ele.colour;
                    context.fillRect(ele.left, ele.top, ele.width, ele.height);
                }
            });
        }

        function getMousePosition(canvas, event) {
            let rect = canvas.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            console.log("Coordinate x: " + x, 
                        "Coordinate y: " + y);

            elements.some(function(ele) {
                if (y > ele.top && y < (ele.top + ele.height) && x > ele.left && x < (ele.left + ele.width)) {
                    if(!isMobile) {
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
                    } else {
                        //1ere anneau
                        if(x>40 && x<90) {
                            anneau1=ele.colour;
                            valAnn1=ele.indexx;
                        } else if(x>100 && x< 150) { // 2eme anneau
                            anneau2=ele.colour;
                            valAnn2=ele.indexx;
                        } else if(x>160 && x<210) { // 3eme anneau
                            anneau3=ele.colour;
                            valAnn3=updateMultiplier(ele.indexx);
                        } else if(x>220 && x<270) { // 4eme anneau
                            anneau4=ele.colour;
                            
                            valAnn4=updatePourcentage(ele.indexx);
                        }
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
    if(!isMobile) {
        return (
            <>
                <div>
                    <div className="text-white font-poppins font-semibold text-[46px]">RESISTANCES.</div>
                    <div className="text-[#d6d6d6] font-poppins text-[20px]">Trouver vos valeurs de résistances facilement</div>
                    <canvas id="resistance" width="700" height="800px" className="m-auto cursor-pointer">
                        Ton navigateur ne supporte pas les balises canvas.
                    </canvas>
    
                </div>
                
            </>
        )    
    } else {
        return (
            <>
                <div>
                    <div className="text-white font-poppins font-semibold text-[46px]">RESISTANCES.</div>
                    <div className="text-[#d6d6d6] font-poppins text-[20px]">Trouver vos valeurs de résistances facilement</div>
                    <canvas id="resistance" width="300" height="600px" className="m-auto">
                        Ton navigateur ne supporte pas les balises canvas.
                    </canvas>
    
                </div>
                
            </>
        )
    }
}

export default SectionWrapper(Resistances,"wrapper")