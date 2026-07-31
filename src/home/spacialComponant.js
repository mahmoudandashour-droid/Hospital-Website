
import '../main.css';
import {Link} from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState , useEffect} from 'react';


export default function Title({head, title, design, clas}){

    return (<div className={`${clas} global-text`}>
    <h5 className={`title px-2 ${design.colorl} `}>{title}</h5>
    <h1 className={`${design.colorD} mb-4 fw-bolder `}>{head}</h1>
    </div>)
}


// 
export function Card({number, title, detials, clas}){

    const [animation, setAnimation] = useState("")

    return(<div className = {` ${clas} ${animation} card rounded-3 p-3 p-lg-5 border-0 col-12 col-md-5 col-lg-3 me-0 mb-3 mb-lg-0`}
    onMouseLeave={()=>setAnimation("hidden")}
    onMouseEnter={()=>setAnimation("top")}
    >
            <h1 className='fw-bolder mb-3 mb-lg-5'>{number}</h1>
            <h3 className='mb-3'>{title}</h3>
            <p className='mb-4 lh-lg'>{detials}</p>
            <Link to='#' > <button className='px-3 btn'> View More <ChevronRightIcon/></button> </Link>
            
    </div>)
}

export function ServCard({pic, title, text}){

    return(<div className='card bg-light p-5 rounded-4 item '>
        <div className='card-img-top box '> <i className={`${pic} rounded-3 icon border-1`}></i></div>
        <div className='card-body' >
            <div className='card-title colorD fw-bolder fs-4' > {title} </div>
            <div className='card-text mb-4' > {text} </div>
            <button className='colorl py-2 px-4 link border-0'> View More </button>
        </div>
    </div>)
}

export function Info({d}){

    return(<div className='text p-5 text-light'>
        <i className="fa-solid fa-quote-left"></i>
        <p className='text-white-50'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.
        </p>
        <div className='d-flex align-items-center'>
            <div className='fw-bolder'>
                <h3 className='mb-3'>John Deo</h3>
                <h5>RATIENT {d}</h5>
            </div>
            <i className="fa-solid fa-quote-right text-white-50"></i>
        </div>
    </div>)
}

//latest news
export function NewCard({pic, avatar, name, time, info}){
    
    return (<div className='card mb-3 mb-md-0'>
        <div className='card-img-top mb-3 p-3 pic '>
            <Link to="/bDetial" ><img src={pic} alt='pic'  className='rounded-2 w-100'/></Link>
        </div>
        <div className='card-body'>
            <div className='card-text d-flex align-items-center gap-2'>
                <img className='rounded-pill avatar' src={avatar} alt='empty' />
                <p className='coloro'>{name}</p>
                <p className='coloro'><i className="fa-solid fa-calendar-days me-1 "></i>{time}</p>
            </div>
            <div className='card-title colorD fs-4 fw-bolder info '>{info}</div>
            <button className='btn-outline colorl btn fs-6 fw-bolder'>Read More</button>
        </div>
    </div>)
}

// Contact Page 
export function ContactCard({icon, title, text, cl}){

    return(<div className={`card ${cl} p-5 `}>
        <div className='card-img-top'>
            {icon}
        </div>
        <div className='card-body'>
            <h4 className='card-title colorD mb-3 '>{title} </h4>
            <p className='card-text mb-2'>{text.t1}</p>
            <p className='card-text'>{text.t2 ? text.t2:''}</p>
        </div>
    </div>)
}

// About Page
export function AboutCard ({title, text , number}){

    const [count , setCount] = useState(0);
    useEffect(()=>{
        let x = 4000 / number;
        console.log(x);
            const time = setInterval(()=>{
                setCount(c =>{
                    if( c > number){
                        clearInterval(time);
                        return number
                    }
                    return c + 1;
                })
            },x)
    },[number]
    )



    return(<div className='card position-relative rounded-5 p-4 '>
        <div className='card-img-top counter coloro fw-bolder fs-1 '>{count}</div>
        <div className='card-body'>
            <h4 className='card-title colorD mb-3 '>{title} </h4>
            <p className='card-text mb-2'>{text}</p>
        </div>
    </div>)
}

// Doctors Componant
export function DoctorCard({pic, title, text, cl}){

    return(<div className={`${cl}  card p-5 position-relative`}>
        <div className='card-img-top mb-5'>
            <div className='m-auto position-relative pic'><img src={pic} alt='pic' className='rounded-pill w-100 h-100'  /></div>
        </div>
        <div className='card-body'>
            <h4 className='text-center fw-bolder colorD card-title'>{title}</h4>
            <p className='fs-6 coloro text-center mb-5 fw-bold'>{text}</p>
            <div className='icons d-flex align-items-center gap-4 justify-content-center '>
                <i class="fa-brands text-light fa-facebook-f"></i>
                <i class="fa-brands text-light fa-instagram"></i>
                <i class="fa-brands text-light fa-twitter "></i>
            </div>
        </div>
    </div>)
}

export function Collap({text, i}){

    const [cl, setCl] = useState("")

    return (<div>
        <button className={`text-light w-100 px-4 py-3 fs-6 rounded-3 show ${cl} d-flex align-items-center justify-content-between  mt-4`}
        data-bs-toggle="collapse" 
        data-bs-target={`#${i}`} 
        onClick={()=>{setCl(c => c === "active"? "n":"active")}} 
        >{text} <i class="fa-solid fa-angle-up rote"></i></button>

        <div className='collapse' id={i}>
            <div className='p-5 text fs-6'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
        </div>
    </div>)
}
//<<<<< About Page >>>>>>>>>