import Nav from "../componans/mainNav"
import Hero from "../componans/globalHero"
import mainpic from '../pic/about.jpg'
import pic1 from '../pic/abou1.webp'
import pic2 from '../pic/about2.jpg'
import per1 from '../pic/member1.jpg'
import per2 from '../pic/member3.jpg'

export default function Blog(){

    return (<div className="blog-page">
        <Nav/>
        <Hero text={'Blog'}/>

        <div className="blog py-5">
            <div className="container py-5">
                <div className="row px-5">
                    <div className="col-lg-8 col-12">

                        <div className="pic mb-3">
                            <img src={per1} alt="pic" className="w-100" />
                        </div>
                        <div className="d-flex align-items-center time">
                            <img src={per1} alt="pic" className="rounded-pill me-3" />
                            <span className="coloro me-3">sonar Moyna</span>
                            <span className="coloro"><i className="fa-solid fa-calendar-days me-1 "></i>  19 july 2021</span>
                        </div>
                        <h1 className="colorD my-4 fw-bolder">Precious Tips To Help You Get Better.</h1>
                        <p className="lh-md">
                            You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.
                        </p>
                        <div className="text d-flex p-5 text-light my-4 rounded-4">
                            <i className="fa-solid fa-quote-left"></i>
                            <h5 className="">
                                Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.
                            </h5>
                        </div>
                        <p className="lh-md mb-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <div className="pics d-flex align-items-center gap-4">
                            <img src={pic2} alt="pic"/>
                            <img src={mainpic} alt="pic"/>
                        </div>
                        <p className="lh-md mb-3">
You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.
                        </p>
                        <p className="lh-md mb-3">
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                        <div className="social1 d-flex align-items-center py-3 position-relative">
                            <div className="link d-flex gap-3">
                                <h5>Tags:</h5>
                                <button className="colorl fw-bold">Health</button>
                                <button className="colorl fw-bold">Grwth</button>
                                <button className="colorl fw-bold">Life</button>
                            </div>
                            <div className="ms-auto d-flex align-items-center gap-3 social">
                                <h5>Share: </h5>
                                <i class="fa-brands brand fa-facebook-f"></i>
                                <i class="fa-brands brand fa-twitter"></i>
                                <i class="fa-brands brand fa-linkedin-in"></i>
                                <i class="fa-brands brand fa-instagram"></i>
                            </div>
                        </div>

                        <div className="quesition d-flex p-4 rounded-3 mt-5">
                            <div className="pic me-3">
                                <img src={per1} alt="pic" className="rounded-3" />
                            </div>
                            <div className="info">
                                <h4 className="colorD mb-4">Sonar Z. Moyna</h4>
                                <p className="lh-md mb-3">Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
                                <div className="d-flex align-items-center gap-2">
                                    <i class="fa-brands brand fa-facebook-f"></i>
                                    <i class="fa-brands brand fa-twitter"></i>
                                    <i class="fa-brands brand fa-linkedin-in"></i>
                                    <i class="fa-brands brand fa-instagram"></i>
                                </div>
                            </div>
                        </div>

                        <div className="comments mt-5 ">
                            <h3 className="position-relative colorD fw-bolder pb-2 title mb-5">8 Comments</h3>
                            <div className="mb-4">
                                <Comment pic={per1} name={"George"} />
                            </div>
                            <div className="mb-4 ps-5">
                                <Comment pic={per2} name={"Falikaz"} />
                            </div>
                            <div className="mb-4">
                                <Comment pic={pic2} name={"George"} />
                            </div>
                            <div className="mb-4">
                                <Comment pic={per2} name={"Sonar"} />
                            </div>
                        </div>

                        <div className="form p-4 rounded-3">
                            <h3 className="colorD pb-2 mb-4 title position-relative">Leave a Reply</h3>
                            <form>
                                <input placeholder="Author" className="px-3 py-2 inp rounded-3 me-4" />
                                <input placeholder="Author" className="px-3 py-2 inp rounded-3" />
                                <textarea className="inp w-100 mt-4 p-3" placeholder="Comment"/>
                                <input type="submit" value={"submit Comment"} className="py-2 fs-5 rounded-3 text-light px-3 submit mt-3" />
                            </form>
                        </div>

                    </div>

                    <div className="col-lg-4 col-12 mt-5 mt-lg-0 ">
                        <div className="recent">
                            <div className="recent-posts mb-5 p-4 rounded-3">
                            <h3 className="position-relative colorD fw-bolder pb-2 title mb-5">Recent Posts</h3>
                            <div className="mb-4">
                                <PicTitle pic={pic1} title={"Precious Tips To Help You Get Better."}/>
                            </div>
                            <div className="mb-4">
                                <PicTitle pic={pic2} title={"Ten Doubts You Should Clarify About."}/>
                            </div>
                            <div className="mb-4">
                                <PicTitle pic={mainpic} title={"The 10 Steps Needed For Putting."}/>
                            </div>
                            </div>

                            <div className="recent-gallery mt-4 p-3 rounded-2">
                                <h3 className="colorD mb-3 title position-relative fw-bolder pb-2 ">Gallery</h3>
                                <div className="row g-2">
                                    {[pic1, pic2, mainpic, per1, per2, pic2].map((p, i) => (
                                        <div key={i} className="col-4">
                                            <img src={p} alt={`recent-${i}`} className="img-fluid rounded-2" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 tags p-4 rounded-3">
                                <h3 className="colorD mb-3 title position-relative fw-bolder pb-2 ">Tags</h3>
                                <div className="d-flex flex-wrap gap-2">
                                    <button className="text-light fw-bold border-0 px-3 py-2 rounded-3">Health</button>
                                    <button className="text-light fw-bold border-0 px-3 py-2 rounded-3">Grwth</button>
                                    <button className="text-light fw-bold border-0 px-3 py-2 rounded-3">Improvement</button>
                                    <button className="text-light fw-bold border-0 px-3 py-2 rounded-3">Life</button>
                                    <button className="text-light fw-bold border-0 px-3 py-2 rounded-3">Education</button>
                                    <button className="text-light fw-bold border-0 px-3 py-2 rounded-3 ">Manage</button>
                                    <button className="text-light fw-bold border-0 px-3 py-2 rounded-3">covid</button>
                                    <button className="text-light fw-bold border-0 px-3 py-2 rounded-3">General</button>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

function PicTitle({ pic, title }) {
    return (
        <div className="d-flex align-items-center team">
            <img src={pic} alt={title} className="me-3 rounded-2" style={{ marginRight: '1rem' }} />
            <div>
                <h5 className="colorD mb-2">{title}</h5>
                <p className="coloro m-0 "><i className="fa-solid fa-calendar me-2"></i>January 1, 2023</p>
            </div>
        </div>
    )
}

function Comment({pic, name}){

    return(<div className="p-4 mb-4 comment">
        <div className="d-flex align-items-center  mb-3">
            <img src={pic} alt="pic" className="rounded-2 me-3"/> 
            <div>
                <h5 className="colorD mb-2">{name}</h5>
                <p className="colorl m-0 ">.blog-page .comment .title</p>
            </div>
        </div>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
        </p>
        <button className="text-light rounded-3 px-3 py-2">REPLY</button>
    </div>)

}


