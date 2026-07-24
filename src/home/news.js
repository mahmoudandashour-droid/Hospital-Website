
import { NewCard } from "./spacialComponant";
import Title from "./spacialComponant";
import pic1 from "../pic/nwe1.jpg"
import pic2 from "../pic/new2.jpg"
import pic3 from "../pic/new3.jpg"
import avat1 from '../pic/pic4.jpg'
import avat2 from '../pic/about.jpg'
import avat3 from '../pic/about0.jpg'
import wavy from '../pic/wave-blue.png'

export default function News(){

    return(<div className="news pb-5 position-relative">
        <Title title={"Latest News"} head={"Our Latest News"} 
        design={{colorl: "coloro", colorD:"colorD"}} clas={"m-auto text-center "} /> 
        
        <div className="container mt-5">
            <div className="row p-4">

                <div className="col-12 col-md-6 col-lg-4">
                    <NewCard pic={pic1} avatar={avat1} name={"John deo"} time={"21 July 2021"}
                    info={"In this hospital there are special surgeon"} />
                </div>
            
                <div className="col-12 col-md-6 col-lg-4">
                    <NewCard pic={pic2} avatar={avat2} name={"John deo"} time={"21 July 2021"}
                    info={"In this hospital there are special surgeon"} />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <NewCard pic={pic3} avatar={avat3} name={"John deo"} time={"21 July 2021"}
                    info={"In this hospital there are special surgeon"} />
                </div>
            </div>
        </div>
        <span class="main-circal animtion-hidden position-absolute rounded-pill"></span>
        <span class="slice position-absolute rounded-pill animtion-hidden"></span>
        <img src={wavy}  className="position-absolute animtion-hidden wavay" alt="pic"/>
    </div>)
}