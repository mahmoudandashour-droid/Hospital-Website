
import { Link } from "react-router-dom"

export default function Hero({text}){

    return(<div className="hero flex-column  d-flex justify-content-center align-items-center position-relative">
        <h1 className="colorD mb-4 title fw-bolder">{text}</h1>
        <div className="text-light rounded-3 px-4 py-2 d-flex align-items-center link ">
            <Link to='/' className="text-light"><i class="fa-solid fa-house me-1"></i> Home</Link> 
            <span className="position-relative ps-3 ms-3 page">{text}</span>
        </div>
        <i class="fa fa-plus position-absolute main-plus animtion-hidden"></i>
        <span className='main-squer position-absolute animtion-hidden'></span>
    </div>)
}