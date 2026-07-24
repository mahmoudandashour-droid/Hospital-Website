import Nav from "../componans/mainNav";
import Welcome from "./wellcome";
import About from "./about";
import Works from "./works";
import Book from "./book";
import Services from "./services";
import Testimonial from "./testimonail";
import News from "./news";
import "../main.css";
export default function Home() {
  return (
    <div>
      <Nav />
      <Welcome className={"home"}/>
      <About/>
      <Works/>
      <Book/>
      <Services/>
      <Testimonial/>
      <News/>
    </div>
  );
}
