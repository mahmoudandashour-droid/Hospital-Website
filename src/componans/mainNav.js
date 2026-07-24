import "../main.css";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import { Button } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import im from "../pic/logo.jpg";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";


export default function Nav() {

  const [scroll, setScroll] =useState("");


  function handleScroll() {
  if(window.scrollY > 20){
    setScroll("position-fixed w-100 bg-light")
  }else{
    setScroll("")
  }
}

  window.addEventListener("scroll", handleScroll);

  const [icons, setIcon] = useState({ser:false, pag:false, blog:false})

  return (
    <>
      <nav className={`navbar navbar-expand-lg ps-2 pe-2 ${scroll}` }>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold colorD"  style={{fontSize:'25px'}} to="/">
            <img src={im} alt="logo" className="logo" />
            MediTro
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#menuSide"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className={"navbar-nav ms-auto"}>

              <li className="nav-item">
                <Link className="nav-link active links" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item d-inline-flex align-items-center">
                <div className="dropdown">
                  <button
                    className="nav-link dropdown-toggle item-child colorl"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                    <AddIcon className="item-child" sx={{width: '20px', color:'gray'}}/>
                  </button>
                  <ul className="dropdown-menu ps-1 pe-3">
                    <li><Link className="dropdown-item " to="/About">About Us</Link></li>
                    <li><Link className="dropdown-item " to="#/Team">Our Team</Link></li>
                    <li><Link className="dropdown-item " to="/FAQs">FAQs</Link></li>
                    <li><Link className="dropdown-item " to="#/Booking">Booking</Link></li>
                    <li><Link className="dropdown-item " to="#/Error">Error 404</Link></li>
                    <li><Link className="dropdown-item " to="#/Login">Login/Register</Link></li>
                  </ul>
                </div>
              </li>

              <li className="nav-item d-inline-flex align-items-center">
                <div className="dropdown">
                  <button
                    className="nav-link dropdown-toggle item-child colorl"
                    data-bs-toggle="dropdown"
                  >
                    service
                    <AddIcon className="item-child" sx={{width: '20px', color:'gray'}}/>
                  </button>
                  <ul className="dropdown-menu ps-1 pe-3">
                    <li><Link className="dropdown-item " to="/Service">Service</Link></li>
                    <li><Link className="dropdown-item " to="/sDetial">Service Detial</Link></li>
                  </ul>
                </div>
              </li>

              <li className="nav-item d-inline-flex align-items-center">
                <div className="dropdown">
                  <button
                    className="nav-link dropdown-toggle item-child colorl"
                    data-bs-toggle="dropdown"
                  >
                    Blog
                    <AddIcon className="item-child" sx={{width: '20px', color:'gray'}}/>
                  </button>
                  <ul className="dropdown-menu ps-1 pe-3">
                    <li><Link className="dropdown-item " to="/bDetial">Blogs</Link></li>
                    <li><Link className="dropdown-item " to="bDetial">Blogs Detial</Link></li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link links colorl" to="/Contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            
            <div className="d-flex group gap-3">
              <Button data-bs-toggle="modal" data-bs-target="#myModal">
                <SearchIcon sx={{transform: "rotate(90deg)", fontSize:"30px" }}/>
              </Button>

              <Button className="btn btn-dengar d-flex gap-3 align-item-center colorl phone" >
                <PhoneIcon/>
                (+20) 00000000
              </Button>

              <Link to='/Contact'>
                <Button className="colorl d-inline-flex gap-2 btn btn-custom px-3 contact">
                    Contact Us
                  <ChevronRightIcon/>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-start bg-dark" id="menuSide">
        <div className="offcanvas-header position-relative justify-content-center mt-5">
          <Link className="navbar-brand fw-bold colorl fs-2 d-flex align-item-center gap-4 my-5"  style={{fontSize:'25px'}} to="/home">
            <img src={im} alt="logo" className="logo" />
            MediTro
          </Link>
          <button
            className="btn-close bg-light position-absolute"
            data-bs-dismiss="offcanvas"
          ><CloseIcon/></button>
        </div>

        <div className="offcanvas-body w-80 m-auto">
          <ul className={"navbar-nav ms-auto"}>

            <li className="nav-item">
              <Link className="nav-link active links" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item d-inline-flex align-items-center">
              <div className="accordion">
                <button
                  className="item-child d-inline-flex align-items-center"
                  data-bs-toggle="collapse"
                  data-bs-target="#page"
                  onClick={()=> setIcon({...icons,pag:!icons.pag})}
                >
                  Pages
                  { icons.pag?<RemoveIcon  className="item-child remove"/> : <AddIcon className="item-child"/>}
                </button>
                <ul className="coll collapse  text-white-50 p-0" id="page">
                  <li><Link className="dropdown-item  ps-3" to="/About">About Us</Link></li>
                  <li><Link className="dropdown-item  ps-3" to="#/Team">Our Team</Link></li>
                  <li><Link className="dropdown-item  ps-3" to="/FAQs">FAQs</Link></li>
                  <li><Link className="dropdown-item  ps-3" to="#/Booking">Booking</Link></li>
                  <li><Link className="dropdown-item  ps-3" to="#/Error">Error 404</Link></li>
                  <li><Link className="dropdown-item  ps-3" to="#/Login">Login/Register</Link></li>
                </ul>
              </div>
            </li>

            <li className="nav-item d-inline-flex align-items-center">
              <div className="accordion">
                <button
                  className=" item-child"
                  data-bs-toggle="collapse"
                  data-bs-target="#service"
                  onClick={()=> setIcon({...icons,ser:!icons.ser})}
                >
                  service
                  { icons.ser?<RemoveIcon  className="item-child remove"/> : <AddIcon className="item-child"/>}
                </button>
                <ul className="coll collapse  text-white-50 p-0" id="service">
                  <li><Link className="dropdown-item ps-3" to="/Service">Service</Link></li>
                  <li><Link className="dropdown-item ps-3" to="/sDetial">Service Detial</Link></li>
                </ul>
              </div>
            </li>

            <li className="nav-item d-inline-flex align-items-center">
              <div className="accordion">
                <button
                  className=" item-child"
                  data-bs-toggle="collapse"
                  data-bs-target="#Blog"
                  onClick={()=> setIcon({...icons,blog:!icons.blog})}
                >
                  Blog
                  { icons.blog?<RemoveIcon  className="item-child remove"/> : <AddIcon className="item-child"/>}
                </button>
                <ul className="coll collapse  text-white-50 p-0" id="Blog">
                  <li><Link className="dropdown-item ps-3" to="/bDetial">Blogs</Link></li>
                  <li><Link className="dropdown-item ps-3" to="/bDetial">Blogs Detial</Link></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link links colorl" to="/Contact">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="sociol d-flex align-item-center justify-content-center mt-3 gap-1 text-white-50 fs-2">
            <FacebookIcon/>
            <GoogleIcon/>
            <LinkedInIcon/>
            <TwitterIcon/>
          </div>
        </div>
      </div>

      <div className="modal fade popup" id="myModal">
        <div className="modal-dialog ">
          <div className="modal-content w-100 h-100 position-fixed popup-content ">
            <div className="modal-header">
              <button className="btn-close closer fs-0" data-bs-dismiss="modal">
                <CloseIcon/>
              </button>
            </div>

            <div className="modal-body d-flex align-items-center justify-content-center position-relative">
              <input className="search" type="text" placeholder="Enter Her"/>
              <SearchIcon sx={{fontSize:30}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
