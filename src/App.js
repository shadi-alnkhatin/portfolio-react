
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import Nav from './Components/Nav';
import Contact from './Components/Contact';
import HeroSec from './Components/HeroSec';
import AboutSec from './Components/AboutSec';
import SkillsSec from './Components/SkillsSec';
import ServicesSec from './Components/ServicesSec';
import WorkSec from './Components/WorkSec';
import TestimonialsSec from './Components/TestimonialsSec';
import HighlightSec from './Components/HighlightSec';
import Footer from './Components/Footer';
import useScrollReveal from './useScrollReveal';



function App() {
  useScrollReveal();
  return (
      <>
      <Nav/>
      <HeroSec/>
      <AboutSec/>
      <SkillsSec/>
      <ServicesSec/>
      <WorkSec/>
      <TestimonialsSec/>
      <HighlightSec/>
      <Contact/>
      <Footer/>

      </>
  );
}

export default App;
