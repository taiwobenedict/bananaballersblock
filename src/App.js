import {useEffect, useContext, useState} from 'react'
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
import Modal from './components/Modal';
import Footer from './components/Footer';






function App() {
  const {toggle} = useContext(StateContext)
  const [loading, setPreloader ] = useState(true)

  useEffect(()=>{
    Aos.init({duration: 1000})
    window.onload = () => {
      setPreloader(false)

    }
  },[])

  if (loading) return <h1 className='fixed-top vh-100 bg-dark'>loading...</h1>
  return (
    <div>
      <Navigation />
      <div className='d-lg-none'>
        <Navbar toggle={toggle} />
      </div>
      <Modal />
      <Home />
      <About />
      <Collection />
      <RoadMap />
      <Mint />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
