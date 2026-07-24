
import '../main.css';
import logo from '../pic/logo.jpg';
import { Link } from 'react-router-dom';

export default function Footer(){
    
    return(<footer className='footer py-5'>
        <div className='container position-relative'>
            <div className='row'>

                <div className="col-12 mb-5 mb-lg-0 col-md-6 col-lg-3">
                    <div className='d-flex align-items-center mb-3'>
                        <img src={logo} alt='pic' className='logo' />
                        <h1 className='fw-bolder ms-2 colorD'>MediTro</h1>
                    </div>

                    <p className='lh-lg mb-4 text'>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                    
                    <div className='d-flex align-items-center contact'>
                        <span className='phone'><i className="fa-solid fa-phone"></i></span>
                        <div>
                            <h6 className='mb-1 coloro'>Contact Us</h6>
                            <h4 className='colorD'>+20 30530640</h4>
                        </div>
                    </div>
                </div>

                <div className='col-6 col-lg-3 quick-link ps-4  mb-5 mb-lg-0'>
                    <h4 className='colorD fw-bolder position-relative pb-2 footer-title mb-4'>Quick Links</h4>
                    <ul className='d-flex flex-column'>
                        <li className='mb-2'><Link to='/About' className='link'>About Us</Link></li>
                        <li className='mb-2'><Link to='/Services' className='link'>Services</Link></li>
                        <li className='mb-2'><Link to='/Booking' className='link'>Booking</Link></li>
                        <li className='mb-2'><Link to='/FAQs' className='link'>Faq's</Link></li>
                        <li className='mb-2'><Link to='/Blogs' className='link'>Blogs</Link></li>
                        <li className='mb-2'><Link to='/Team' className='link'>Our Team</Link></li>
                    </ul>
                </div>

                <div className='col-6 col-lg-3 quick-link ps-4  mb-5 mb-lg-0'>
                    <h4 className='colorD fw-bolder position-relative pb-2 footer-title mb-4'>Our Services</h4>
                    <ul className='d-flex flex-column'>
                        <li className='mb-2'><Link to='/sDetails' className='link'>Dental</Link></li>
                        <li className='mb-2'><Link to='/sDetails' className='link'>Cardiac Clinic</Link></li>
                        <li className='mb-2'><Link to='/sDetails' className='link'>Massage Therapy</Link></li>
                        <li className='mb-2'><Link to='/sDetails' className='link'>Cardiology</Link></li>
                        <li className='mb-2'><Link to='/sDetails' className='link'>Precise Diagnosis</Link></li>
                        <li className='mb-2'><Link to='/sDetails' className='link'>Abmbulance Services</Link></li>
                    </ul>
                </div>

                <div className='col-md-6 col-lg-3 col-12 subcribe'>
                    <h4 className='colorD fw-bolder position-relative pb-2 footer-title mb-4 mx-auto mx-md-0'>Subcribe</h4>
                    <input type='email' placeholder='Email Address' className=' p-2 bg-light rounded-2 d-block mb-3 inp' />
                    <button className='px-3 py-2 text-light rounded-2 sub d-block'>Subcribe Now</button>
                    <div className='socail d-flex aling-items-center mt-4'>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-square-twitter"></i>
                        <i className="fa-brands fa-square-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>)
}