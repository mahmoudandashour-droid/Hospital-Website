
import '../main.css'
import Nav from "../componans/mainNav"
import { ServCard, AboutCard} from "../home/spacialComponant"
import Hero from '../componans/globalHero'
import News from '../home/news'

export default function ServPage(){


    return(<div className="serv-page services">
            <Nav/>
            <Hero text={"Services"} />
            <div className="serv py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 mb-3"><ServCard title={"Diagnostics"} 
                        text={"Phasellus venenatis porta rhoncus. Integer et viverra felis."}
                        pic={"fa-solid fa-truck-medical"}/>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3"><ServCard pic={"fa-solid fa-briefcase-medical"}
                        title={"Diagnostics"} text={"Phasellus venenatis porta rhoncus. Integer et viverra felis."}
                        /></div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3"><ServCard pic={"fa-solid fa-house-medical-flag"}
                        title={"Treatment"} text={"Phasellus venenatis porta rhoncus. Integer et viverra felis."}
                        /></div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3"><ServCard pic={"fa-solid fa-truck-medical"}
                        title={"Surgery"} text={"Phasellus venenatis porta rhoncus. Integer et viverra felis."}
                        /></div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3"><ServCard pic={"fa-solid fa-syringe"}
                        title={"Vaccin"} text={"Phasellus venenatis porta rhoncus. Integer et viverra felis."}
                        /></div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3"><ServCard pic={"fa-solid fa-stethoscope"}
                        title={"Emergency"} text={"Phasellus venenatis porta rhoncus. Integer et viverra felis."}
                            /></div>
                    </div>
                </div>
                
            </div>
            <div className="numbers py-5 mb-5">
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
            <News/>
    </div>)
}