import '../main.css'
import phone from '../pic/mobile.png';
import women from '../pic/women.png';
import wavay from '../pic/wave-orange.png';

export default function Book(){
    return(<div className="book py-5 bgf">
        <div className="container items rounded-5 p-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-5 position-relative form">
                    <form className='rounded-4 bg-light p-5'>
                        <h2 className='mb-5 text-center colorD fw-bolder '>Book Appointment</h2>
                        <div className='mb-3'>
                            <button className='dropdown-toggle btn w-100 p-2 text-start style-input' data-bs-toggle='dropdown' data-bs-target='#depart'>Selecty Department</button>
                            <ul className='dropdown-menu' id="depart">
                                <li className='dropdown-item option' value={"one"}>one</li>
                                <li className='dropdown-item option' value={"Tow"}>Tow</li>
                                <li className='dropdown-item option' value={"Three"}>Three</li>
                            </ul>
                        </div>

                        <div className='mb-3'>
                        <button className='dropdown-toggle btn w-100 p-2 text-start style-input' data-bs-toggle='dropdown' data-bs-target='#doctor'>Selecty Doctor</button>
                            <ul className='dropdown-menu' id="doctor">
                                <li className='dropdown-item option' value={"one"}>one</li>
                                <li className='dropdown-item option' value={"Tow"}>Tow</li>
                                <li className='dropdown-item option' value={"Three"}>Three</li>
                            </ul>
                        </div>

                        <input type='text' className='w-100 py-2 px-3 style-input rounded-3 mb-3' placeholder='Your Name'/>
                        <input type='text' className='w-100 py-2 px-3 style-input rounded-3 mb-3' placeholder='Phone Numvers'/>
                        <input type='date' className='w-100 py-2 px-3 style-input rounded-3 mb-3'/>

                        <input type='submit' className='rounded-3  text-white-50 py-3 px-4 appoin m-auto' value={'Appointment Now'}/>
                    </form>
                    <img src={wavay} className='position-absolute wavay animtion-hidden'/>
                </div>

                <div className="col-12 col-lg-6  position-relative pic mt-3 mt-lg-0">
                    <img src={phone} className='w-100 h-100'/>
                    <img src={women} className='position-absolute woman'/>
                    <span className='main-circal animtion-hidden position-absolute rounded-pill'></span>
                    <i className ="fa-solid fa-check animtion-hidden position-absolute rounded-pill check text-light"></i>
                    <i className ="fa-solid animtion-hidden fa-gear position-absolute  setting text-light"></i>
                    <i className ="fa-solid animtion-hidden fa-location-dot position-absolute  location text-light"></i>
                </div>
            </div>
        </div>
    </div>)
} 