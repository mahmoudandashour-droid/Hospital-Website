
import "../main.css";
import Title from "./spacialComponant";
import { Link } from "react-router-dom";
import { ServCard } from "./spacialComponant";
import { useState,useRef } from "react";

export default function Services(){

    // logic for Items 
    // Scroll in Large Screen
    const [walk, setWalk] = useState(0);
    const[bg,setBG] = useState({front:false,back:true})
    
    const refNamberCard = useRef(0);
    
    function handleFront(){
        if(refNamberCard.current === 4) return;
        setWalk(walk - 300);
        refNamberCard.current+=1;
        check()
    }
    function handleBack(){
        if(refNamberCard.current === 0) return;
        setWalk(walk + 300)
        refNamberCard.current-=1;
        check()
    }

    function check(){
        refNamberCard.current === 0 ? setBG({...bg,back:true}):
        refNamberCard.current === 4 ? setBG({...bg,front:true}):
        setBG({back:false,front:false})
    }


    // Scroll in Mobile 

    const startX = useRef(0);
    function getX(e){
        startX.current = e.touches[0].clientX;
        console.log(startX.current);
    }

    function flipMobile(e){
        const endX = e.changedTouches[0].clientX;
        console.log(endX);
        const change = startX.current - endX;
        if(change > 50 ){
            if(refNamberCard.current === 4) return;
            setWalk(walk - 320)
            refNamberCard.current++;
        }
        else if(change < -50 ){
            if(refNamberCard.current === 0 ) return;
            setWalk(walk + 320)
            refNamberCard.current--;
        }
        console.log(refNamberCard.current)
    }


    return (<div className="services bgf py-5">
        <div className="container py-5">
            <div className="row detials py-5 px-2">
                <div className="col-12 col-lg-4 m- texts bg-light">
                    <Title title={"Services"} head={"We Cover A Big Variety Of Medical Services"}
                    design={{colorl:"coloro", colorD:"colorD"}}
                    />
                    <p className="lh-lg mb-4">We provide the special tips and advice’s of heath care treatment and high level of best.</p>
                    <Link to="/Service"><button className="rounded-3 py-3 px-4 text-light service-link ">All Services</button></Link>
                </div>

                
                <div className=" box col-12 col-lg-8 position-relative ">
                    <div className="bg"></div>
                    <div className=" cards ">
                        <div className="finalItem "  style={{ left: `${walk}px` }} 
                        onTouchStart={getX}
                        onTouchEnd={flipMobile}
                        >
                            <div className={`  servcard d-flex gap-4 align-items-center position-absolute`}>
                                <ServCard pic={"fa-solid fa-briefcase-medical"}
                                title={"Diagnostics"} text={"Phasellus venenatis porta rhoncus. Integer et viverra felis."}
                                />
                                <ServCard pic={"fa-solid fa-house-medical-flag"}
                                title={"Treatment"} text={"Phasellus venenatis porta rhoncus. Integer et viverra felis."}
                                />
                                <ServCard pic={"fa-solid fa-truck-medical"}
                                title={"Surgery"} text={"Phasellus venenatis porta rhoncus. Integer et viverra felis."}
                                />
                                <ServCard pic={"fa-solid fa-syringe"}
                                title={"Vaccin"} text={"Phasellus venenatis porta rhoncus. Integer et viverra felis."}
                                />
                                <ServCard pic={"fa-solid fa-stethoscope"}
                                title={"Emergency"} text={"Phasellus venenatis porta rhoncus. Integer et viverra felis."}
                                />
                    
                            </div>
                        </div>

                        <div className="flip position-absolute">
                            <span className="front"><i className="fa-solid fa-arrow-left" onClick={handleBack}
                            style={{backgroundColor:bg.back? "gray" : "", cursor:bg.back ? "default":"pointer"}}></i></span>
                            <span className="back"><i className="fa-solid fa-arrow-right" onClick={handleFront} 
                            style={{backgroundColor:bg.front? "gray" : "", cursor:bg.front ? "default":"pointer"}} ></i></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>)
}