import '../main.css'
import Nav from "../componans/mainNav";
import Hero from "../componans/globalHero";
import { Collap } from "../home/spacialComponant";
import pic from '../pic/new3.jpg'
import { useEffect, useState } from 'react';


export default function SDitails(){


    return(<div className="sDetails-page">
        <Nav/>
        <Hero text={"Service Details"}/>
        <div className="detail py-5">
            <div className="container px-0 px-lg-5">
                <div className="row px-0">
                    <div className="col-12 col-lg-8 pe-0 pe-lg-4">
                        <div className='pic'>
                            <img src={pic} alt='pic' className='w-100' />
                        </div>
                        <h3 className='colorD my-4 '>
                            Why Medical Had Been So Popular Till
                        </h3>
                        <p>
                            Why Medical Had Been So Popular Till
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </p>
                        <div className='technology '>
                            <div className='row'>
                                <div className='col-12 col-md-6 pe-0 pe-md-3'>
                                    <Mark text={"Then along come two they"}/>
                                    <Mark text={"That’s just a little bit more than"}/>
                                    <Mark text={"Standard dummy text ever since"}/>
                                    <Mark text={"Simply dummy text of the printing"}/>
                                    <Mark text={"Make a type specimen book"}/>
                                </div>
                                <div className='col-12 col-md-6  ps-0 ps-md-5 '>
                                    <Line text={'Advanced Technology'} number={96} />
                                    <Line text={'Certified Engineers'} number={79} />
                                    <Line text={'6 years Experienc'} number={75} />
                                </div>
                            </div>
                        </div>
                        <h4 className='colorD mt-4 mb-3'>Popular Questions</h4>
                        <p className='mb-4'>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <div className='question'>
                            <Collap i="col1" text={"How Doctor Can Ease Your Pain ?"} />
                            <Collap i="col2" text={"How do i withdraw from a subject ?"} /> 
                            <Collap i="col3" text={"How Can i Contact You ?"} /> 
                            <Collap i="col4" text={"Understand Doctor Before You Regrat ?"} /> 
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 pos mt-5 mt-lg-0">
                        <div className='links-item p-5 rounded-2'>
                            <Links text={"Engine Diagonstics"} />
                            <Links text={"Belts And Hoses"} />
                            <Links text={"Brake Repair"} />
                            <Links text={"Air Conditoning"} />
                        </div>
                        <div className='links-item p-5 rounded-2 mt-4'>
                            <h4 className='position-relative pb-2 mb-4 colorD title mb-3'>Download</h4>
                            <Pdf text={"Download Our Brochures"}/>
                            <Pdf text={"Our Company Details"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

function Mark({text}){

    return(<div className='text d-flex align-items-center mb-2'>
        <i class="fa-solid fa-check me-3 d-flex align-items-center justify-content-center rounded-3"></i>
        <p className='colorD fs-5'> {text} </p>
    </div>)
}

function Line({text, number}){

    const [count, setCount]= useState(0);
    const [wd, setWd]= useState('');

    useEffect( ()=>{
        let time = 5000 / number;
        const id = setInterval(() => {
            setCount(c=>{
                if(c > number){
                    clearInterval(id);
                    return number;
                }
                return c + 1;
            })
        }, time);

        setTimeout(()=>{
            setWd(number);
        },500)
    },
    [number])

    return(<div className='mb-5 line ps-0 ps-md-3'>
        <div className='d-flex align-items-center mb-3'>
            <h5 className='colorD'> {text} </h5>
            <h6 className='colorl ms-auto'> {count}%</h6>
        </div>
        <div className='position-relative one'>
            <span className='position-relative tow' style={{width:`${wd}%`}}></span>
        </div>
    </div>)
}

function Links({text}){
    return(<>
        <button className='py-2 px-3 text-light d-flex align-items-center mb-2 w-100 fs-6'>
            {text} <i class="fa-solid fa-angle-right ms-auto colorD d-flex align-items-center justify-content-center rounded-2"></i>
            </button>
    </>)
}

function Pdf({text}){

    return (<div className='d-flex align-items-center py-2 px-3 text-light pdf rounded-3 mb-4'>
        <i class="fa-regular fa-file-pdf text-light fs-3 me-3"></i>
        <div className='text p-0'>
            <h6 className='mb-1'>
                {text}
            </h6>
            <p className='text-white-50 m-0'>Download</p>
        </div>
    </div>)
}