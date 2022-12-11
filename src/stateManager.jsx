import {createContext, useState} from 'react';

const StateContext = createContext()

export const StateProvider = ({children}) => {

  const [toggle, setToggle ] = useState(false)


 return <StateContext.Provider value={{

  toggle,
  setToggle

  }}> {children} </StateContext.Provider>
}

export default StateContext