import { useContext } from 'react'
import CtaButton from './CtaButton'
import Social from './Social'
import Toggler from './Toggler'
import StateContext from '../stateManager'


function Navigation() {
  const { toggle } = useContext(StateContext)
  return (
    <header id='header' className='fixed-top p-3'>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className=" d-flex align-items-center">
            <div className="d-none d-lg-block">
            <Navbar toggle={toggle} />
            </div>
            <CtaButton>CONNECT WALLET</CtaButton>
            <div className="d-none d-sm-block d-lg-none ">
              <Social />
            </div>
            <Toggler />

          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation


export function Navbar({ toggle }) {
  return (
    <nav className={`navbar d-block pt-4 py-lg-2 ${toggle && 'active'}`}>
      <ul className='d-lg-flex '>
        <li><a href="#home" className={`nav-link delay delay1 ${toggle && 'active'}`}>Home</a></li>
        <li><a href="#about" className={`nav-link delay delay3 ${toggle && 'active'}`}>About</a></li>
        <li><a href="#collection" className={`nav-link delay delay2 ${toggle && 'active'}`}>Collection</a></li>
        <li><a href="#roadmap" className={`nav-link delay delay4 ${toggle && 'active'}`}>RoadMap</a></li>
        <li><a href="#mint" className={`nav-link delay delay5 ${toggle && 'active'}`}>Mint</a></li>
        <li><a href="#faq" className={`nav-link delay delay6 ${toggle && 'active'}`}>Faq</a></li>
        <div className="d-sm-none d-lg-block">
          <Social />
        </div>
      </ul>
    </nav>
  )
}