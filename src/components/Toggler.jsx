import {useContext} from 'react'
import StateContext from '../stateManager'
import {FaBars, FaTimes} from 'react-icons/fa'



function Toggler() {
  const {toggle, setToggle} = useContext(StateContext)


  return (
    <>
    {
      toggle
      ? <div className={`toggler d-lg-none ml-4 ${ toggle && 'rotate'}`} ><FaTimes size="40px" onClick={() => setToggle((prev) => (!prev))}/></div>  
      : <div className={`toggler d-lg-none ml-4 ${ toggle && 'rotate'}`}><FaBars size="40px" onClick={() => setToggle((prev) => (!prev))}/></div> 
    }
    </>
  )
}

export default Toggler