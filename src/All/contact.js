
import Hero from "../componans/globalHero";
import Nav from "../componans/mainNav";
import { useState } from "react";
import pic from '../pic/new3.jpg';
import { Link } from "react-router-dom";
import { ContactCard } from "../home/spacialComponant";

export default function Contact(){

    const [chouse,setChouse] = useState("Selecty Department");

    function handleClick (e){
        if( e.target.classList.contains("active")) return;

        let data = e.target.dataset.chouse;
        const items = document.querySelectorAll(".options .menu li");
        items.forEach(e=>{
            e.classList.toggle("active",
                e.dataset.chouse === data
            )
        })
        setChouse(data);
    }

    return(<div className="contact-page">
        <Nav/>
        <Hero text={"Contact Us"} />
        <div className="form p-0 p-md-5">
            <div className="container p-0 p-md-5">
                    <div className="row rounded-5 p-3 p-md-5 content">
                        <div className="row col-12 col-lg-6 gap-5 m-auto m-md-0 mb-3">
                            <input className="col-11 col-md-5  rounded-2 p-3" type="text" placeholder="Your Name" />
                            <input className="col-11 col-md-5  rounded-2 p-3" type="email" placeholder="Email"/>
                            <input className="col-11 col-md-5  rounded-2 p-3" type="text" placeholder="Phone Number"/>
                            <div className="col-11 col-md-5  dropdown options">
                                <button className="dropdown-toggle  w-100 rounded-2 p-3 order-menu "  data-bs-toggle="dropdown">{chouse}</button>
                                <ul className="dropdown-menu menu">
                                    <li className="dropdown-item"  onClick={handleClick}  data-chouse='One' >One</li>
                                    <li className="dropdown-item"  onClick={handleClick}  data-chouse='Tow' >Tow</li>
                                    <li className="dropdown-item"  onClick={handleClick}  data-chouse='Three' >Three</li>
                                </ul>
                            </div>
                            <textarea placeholder="Type Message" className="p-4 col-12 my-3"></textarea>
                        <button className="col-15 text-center py-3 rounded-2 text-light submit">Submit</button>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="info position-relative ">
                                <img src={pic}  alt="pic"/>
                                <img src={pic}  alt="pic"/>
                                <div className="position-absolute content p-5 ">
                                    <h4 className="title mb-4">Contact Us For Any Informations</h4>
                                    <div className="text-light mb-4 w-50">
                                        <div className="main-title d-flex align-items-center  pb-3 mb-3">
                                            <i class="fa-regular fa-map text-light me-3"></i>
                                            <h5>Location</h5>
                                        </div>
                                        <p className="lh-lg">2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                    </div>

                                    <div className="text-light mb-4 w-50">
                                        <div className="main-title d-flex align-items-center  pb-3 mb-3">
                                            <i class="fa-solid fa-address-card me-3"></i>
                                            <h5>Email & Phone</h5>
                                        </div>
                                        <Link to="#" className="text-light mb-2">info@yourdonain.con</Link>
                                        <p>0102434443</p>
                                    </div>

                                    <div className="text-light mb-4 w-50">
                                        <div className="main-title d-flex align-items-center  pb-3 mb-3">
                                            <i class="fa-solid fa-globe me-3"></i>
                                            <h5>Fullow Us</h5>
                                        </div>
                                        <div className="icons d-flex align-items-center gap-3">
                                            <i class="fa-brands fa-linkedin"></i>
                                            <i class="fa-brands fa-square-twitter"></i>
                                            <i class="fa-brands fa-square-facebook"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cards row m-auto">
                        <div className="col-12 col-lg-4 col-md-6">
                            <ContactCard icon={<i class="fa-solid fa-tty"></i>} cl={"pr mb-3 mb-md-0"}
                            title={'Contact Number'} text={{t1:'+002 3424 44 00',t2:'+001 123 456 790'}} />
                        </div>
                        <div className="col-12 col-lg-4 col-md-6">
                            <ContactCard icon={<i class="fa-solid fa-envelope"></i>} cl={"rd mb-3 mb-md-0"}
                            title={'Email Address'} text={{t1:'info@yourdomain.com',t2:'example@support.com'}} />
                        </div>
                        <div className="col-12 col-lg-4 col-md-6">
                            <ContactCard icon={<i class="fa-solid fa-map-location-dot"></i>} cl={"gr"}
                            title={'Address'} text={{t1:'2005 Stokes Isle Apt. 896, Venaville 10010, USA'}} />
                        </div>
                    </div>
            </div>
            
        </div>
    </div>)
}