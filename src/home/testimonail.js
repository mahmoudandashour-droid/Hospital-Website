
import '../main.css';
import Title from './spacialComponant';
import p1 from '../pic/abou1.webp'
import p2 from '../pic/about2.jpg'
import p3 from '../pic/about.jpg'
import p4 from '../pic/about0.jpg'
import p5 from '../pic/pic4.jpg'
import p6 from '../pic/pic4.jpg'
import { Info } from './spacialComponant';
import { useState } from 'react';

export default function Testimonial(){

    const [moveItem, setMove] = useState(0)
    
    let currentItem = 1;

    function handleClick(e){
        let item = e.target;
        if(item.classList.contains("active")) return;

        let itemInfo = item.dataset.info;
        const items = document.querySelectorAll(".pics img");
        const polites = document.querySelectorAll('.polites li');

        setTimeout(()=>{
            changeActive(items, itemInfo);
        },1000)
        changeActive(polites, itemInfo);

        let num = item.dataset.number;
        getInfo(num);
    }

    function changeActive(arr, data){

        arr.forEach(e=>{
            e.classList.toggle("active",
                e.dataset.info === data
            )
        })
    }

    
    function getInfo(number){
        let action = currentItem - Number(number);
        currentItem =  Number(number);

        let move = action * 400;
        setMove(move);
        
    }


    return(
        <div className='testimonial py-5 my-5 pgf position-relative'>
            <span className="main-squer position-absolute animtion-hidden"></span>
            <span className="animtion-hidden rounded-pill border-2 main-circal position-absolute"></span>
            <div className=' px-2 px-md-0 Text d-flex justify-content-center mb-4'>
                <Title head={"See What Are The PatientsSaying About us"}
                title={"Testimonial"}
                design={{colorl:"coloro",colorD:"colorD" }}
                />
            </div>

            <div className='container'>
                <div className='row px-2 px-md-3 px-lg-5'>

                    <div className='col-12 col-lg-6 d-flex align-items-center'>

                        <div className='pics position-relative d-flex justify-content-center align-items-center'>
                            <div className='shap'>
                                <div className='shap2'></div>
                            </div>
                            <img  onClick={handleClick} data-number='1' 
                            src={p1} alt='pic' className='rounded-pill position-absolute active'  data-info='pic1' />

                            <img  onClick={handleClick} data-number='2'  
                            src={p2} alt='pic' className='rounded-pill position-absolute'  data-info='pic2' />

                            <img  onClick={handleClick} data-number='3'  
                            src={p3} alt='pic' className='rounded-pill position-absolute'  data-info='pic3' />

                            <img  onClick={handleClick} data-number='4'  
                            src={p4} alt='pic' className='rounded-pill position-absolute'  data-info='pic4' />

                            <img  onClick={handleClick} data-number='5'  
                            src={p5} alt='pic' className='rounded-pill position-absolute'  data-info='pic5' />

                            <img  onClick={handleClick} data-number='6'  
                            src={p6} alt='pic' className='rounded-pill position-absolute'  data-info='pic6' />
                        </div>
                    </div>

                    <div className='col-12 col-lg-6 p-0 p-md-3 p-lg-5  '>
                        <div className='content-info position-relative mt-4 mt-md-0'>
                            <div className='info position-absolute d-flex align-items-center gap-5 '
                            style={{transform:`translateX(${moveItem}px)`}}>
                                <Info d={9}/>
                                <Info/>
                                <Info/>
                                <Info/>
                                <Info/>
                                <Info/>
                            </div>
                        </div>

                        <div className='flip d-flex justify-content-between align-items-center mt-3 px-2'>
                            <ul className='d-flex align-items-center gap-1 polites ms-auto'>
                                <li data-info="pic1" onClick={handleClick}  data-number='1'  className='active'></li>
                                <li data-info="pic2" onClick={handleClick}  data-number='2' ></li>
                                <li data-info="pic3" onClick={handleClick}  data-number='3' ></li>
                                <li data-info="pic4" onClick={handleClick}  data-number='4' ></li>
                                <li data-info="pic5" onClick={handleClick}  data-number='5' ></li>
                                <li data-info="pic6" onClick={handleClick}  data-number='6' ></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}