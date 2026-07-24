
import a1 from '../pic/about0.jpg'
import a2 from '../pic/abou1.webp'
import a3 from '../pic/about2.jpg';
import Title from './spacialComponant';
import wavy from '../pic/wave-orange.png'

export default function About(){

    return(<div className="about p-5 bgf">

        <div className="container py-5 row m-auto">

            <div className="pics col-12 col-lg-6 row position-relative mb-3 m-lg-0">
                <div className='col-6  mb-3 row justify-content-end align-items-end'><img src={a1} alt='pic doctore ' className='pic1 col-10' /></div>
                <div className='col-6  mb-3 row'><img src={a2} alt='pic doctore' className='pic2 ' /></div>
                <div className='col-6 row justify-content-end align-items-start position-relative'>
                    <img src={a3} alt='pic doctore' className='pic3 col-9 position-relative' />
                    <img src={wavy} alt='pic doctore' className='position-absolute wavy' />
                    </div>
                <div className='text col-6 row position-relative'>
                    <span className='position-absolute shape'></span>
                    <div className='years col-8'>
                        <span className='d-block colorl mb-3 text-center'>20</span>
                        <h5 className='colorD '>Year Experience</h5>
                    </div>
                </div>
                <span className='main-squer position-absolute'></span>
            </div>
            
            <div className='col-12 col-lg-6 pt-3 part-text position-relative'>
                <Title title={"About Us"} head={"The Great Place Of Medical Hspital center"} design={{colorl:"coloro", colorD:"colorD"}} />
                <p className='my-3 descript'>We provide the special tips and advice’s of heath car m-3e treatment and high level of best technology involve in the our hospital.</p>

                <div className='boxs row mt-5'> 
                    <div className='box car m-3 col-12 col-md-5'>
                        <div className='icon'><i className="fa-solid fa-truck-medical"></i></div>
                        <p className='colorD fs-6 fw-bolder align-self-end'> Emergency Help</p>
                    </div>

                    <div className='box bad m-3 col-12 col-md-5'>
                        <div className='icon'><i className="fa-solid fa-bed-pulse"></i></div>
                        <p className='colorD fs-6 fw-bolder align-self-end'> Qualified Doctors</p>
                    </div>

                    <div className='box water m-3 col-12 col-md-5'>
                        <div className='icon'><i className="fa-solid fa-droplet"></i></div>
                        <p className='colorD fs-6 fw-bolder align-self-end'> Best Professionals</p>
                    </div>

                    <div className='box syringe m-3 col-12 col-md-5'>
                        <div className='icon'><i className="fa-solid fa-syringe"></i></div>
                        <p className='colorD fs-6 fw-bolder align-self-end'>Medical Treatment</p>

                    </div>
                </div>

                <button className='btn text-light read-btn py-2 px-4 mt-4'>Read More</button>
                <span className='slice position-absolute rounded-pill'></span>
            </div>
        </div>
    </div>)
}