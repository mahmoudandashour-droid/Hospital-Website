
import Title from "./spacialComponant"
import {Card } from "./spacialComponant"

import '../main.css'

export default function Works (){



    return (<div className="works bgf py-5">
        <Title head={"How We Works ?"} title={'Working Process'} 
        design={{colorl:"coloro", colorD:"colorD"}}
        clas="mb-5 text-center" />

        <div className="container position-relative pb-5 mb-5">
            <i className="fa fa-plus position-absolute main-plus animtion-hidden"></i>
            <span className="animtion-hidden rounded-pill border-2 main-circal position-absolute"></span>
            <div className="cards row justify-content-center pt-5">
                <Card number={'01'} title={'Make Appointmnet'} clas={"me-md-4 position-relative mb-3 mb-md-0"}
                detials={"It is a long established fact that a reader will be distracted by the readable content of"} />
                
                <Card number={'02'} title={'Take Treatment'} clas={"active me-md-4"}
                detials={"It is a long established fact that a reader will be distracted by the readable content of"} />
                
                <Card number={'03'} title={'Registration'} clas={"position-relative"}
                detials={"It is a long established fact that a reader will be distracted by the readable content of"} />
            </div>
        </div>
    </div>)
}