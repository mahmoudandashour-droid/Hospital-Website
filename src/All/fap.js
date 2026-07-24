
import Nav from "../componans/mainNav";
import Hero from "../componans/globalHero";
import { Collap} from "../home/spacialComponant";
import News from "../home/news";


export default function Faq(){
    
    return(<div className="faq-page">
        <Nav/>
        <Hero text={"Faq's"} />
        
        <div className="question py-5 ">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-4"> 
                        <Collap i="col1" text={"How Doctor Can Ease Your Pain ?"} />
                        <Collap i="col2" text={"How do i withdraw from a subject ?"} /> 
                        <Collap i="col3" text={"How Can i Contact You ?"} /> 
                        <Collap i="col4" text={"Understand Doctor Before You Regrat ?"} /> 
                    </div>

                    <div className="col-12 col-lg-6"> 
                        <Collap i="col5" text={"How Doctor Can Ease Your Pain ?"} />
                        <Collap i="col6" text={"What tupes of systems do you support ?"} /> 
                        <Collap i="col7" text={"Understand Doctor Before You Regrat ?"} /> 
                        <Collap i="col8" text={"How Doctor Can Ease Your Pain ?"} /> 
                    </div>
                </div>
            </div>
        </div>

        <News/>
    </div>)
}