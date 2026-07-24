import Nav from "../componans/mainNav"
import About from "../home/about";
import News from "../home/news";
import Hero from "../componans/globalHero";
import Testimonial from "../home/testimonail";
import { AboutCard, DoctorCard } from "../home/spacialComponant";
import pic1 from '../pic/member1.jpg'
import pic2 from '../pic/member3.jpg'
import pic3 from '../pic/about.jpg'
import Title from "../home/spacialComponant";

export default function AboutPage(){


    return (<div className="about-page">
        <Nav/>
        <Hero text={"About Us"} />
        <About/>

        <div className="numbers py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 pe-0 pb-4 pb-lg-0  pe-md-5 ">
                        <AboutCard text={"Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."}
                        title={"Years With You"} number={200} />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 pe-lg-5 pe-0 pb-4 pb-lg-0 ">
                        <AboutCard text={"Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."}
                        title={"Awards"} number={400} />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 pe-0 pb-4 pb-lg-0 pb-md-0 pe-md-5">
                        <AboutCard text={"Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."}
                        title={"Doctors"} number={250} />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 pe-lg-5 pe-0 pb-4 pb-lg-0 pb-md-0">
                        <AboutCard text={"Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."}
                        title={"Satisfied Client"} number={800} />
                    </div>
                </div>
            </div>

        </div>

        <div className="doctor py-5">
            <div className="container">

            <Title title={"Our Doctor"} head={"Meet Best Doctors"} 
            design={{colorl:"coloro", colorD:"colorD"}} 
            clas={"text-center mb-5"} />

                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                        <DoctorCard pic={pic1}  text={"Dentist"} title={"Dr.Addition Smith"} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                        <DoctorCard pic={pic2}  text={"Dentist"} title={"Dr.Addition Smith"} cl="active"  />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <DoctorCard pic={pic3}  text={"Dentist"} title={"Dr.Addition Smith"} />
                    </div>
                </div>
            </div>
        </div>

        <Testimonial/>
        <News/>
    </div>) 
}