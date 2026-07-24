import "./App.css";
import { Routes,Route } from "react-router-dom";
import Home from "./home/home";
import Contact from "./All/contact";
import AboutPage from "./All/About";
import Faq from "./All/fap";
import ServPage from "./All/services";
import SDitails from "./All/servDetails";
import Blog from "./All/blog";
import Footer from "./global/footer";

// Start App
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/About" element={<AboutPage/>}></Route>
        <Route path="/Faqs" element={<Faq/>}></Route>
        <Route path="/Service" element={<ServPage/>}></Route>
        <Route path="/sDetial" element={<SDitails/>}></Route>
        <Route path="/bDetial" element={<Blog/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
