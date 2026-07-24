
import Title from "./spacialComponant";
import im from '../pic/welcom.png'
import lineWavy from '../pic/wave-orange.png'
import {Link} from 'react-router-dom'

export default function Welcome(){
    return(<div className="home py-5 position-relative">
    <div className="container py-5 row m-auto justify-content-between gap-2">
        <div className="col-md-7 col-12 d-flex flex-column justify-content-center ">
            <span className="circte position-relative"></span>
            <Title title="We Prvide Health Care Solution" head="Protect Your Health And Take Care To Of Your Health" 
            design={{colorl:"colorl", colorD:"colorD"}}
            />
            <Link to='/'><button className="btn text-light py-2 px-4 fs-5 reading">Read More</button></Link>
        </div>
        <div className="col-md-4 col-12 position-relative">
            <div className="pic position-relative">
                <img src={im} alt="Picturedoctor" />
            </div>
            <img src={lineWavy} alt="Lines Wavies" className="position-absolute orange-wavy"/>
        </div>
        <i className="fa fa-plus position-absolute main-plus "></i>
        <span className="position-absolute  main-squer"></span>
    </div>
    </div>)
}