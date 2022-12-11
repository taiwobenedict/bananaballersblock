import {useEffect, useContext} from 'react'
import Home from './sections/Home';
import Collection from './sections/Collection';
import RoadMap from './sections/RoadMap';
import Mint from './sections/Mint';
import Faq from './sections/Faq';
import About from "./sections/About";
import Navigation, { Navbar } from "./components/Navigation";
import Aos from "aos"
import "aos/dist/aos.css"
import StateContext from './stateManager';





function App() {
 const {toggle} = useContext(StateContext)

  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])
  return (
    <div>
      <Navigation />
      <div className='d-lg-none'>
        <Navbar toggle={toggle} />
      </div>
      <Home />
      <About />
      <Collection />
      <RoadMap />
      <Mint />
      <Faq />
    </div>
  );
}

export default App;
