import React, { createContext, useState } from 'react'

export const CounterContex = createContext()

const CounterContextProvider = ({children}) => {

    const [count, setCount] = useState(0)

    let handleIncrement = () =>{
        setCount(prev => prev + 1)
    }

    let handleDecrement = () =>{
        setCount(prev => prev - 1)
    }
  return (
    <div>
        <CounterContex.Provider value={{count:count, increment:handleIncrement, decrement:handleDecrement}}>
            {children}
        </CounterContex.Provider>
    </div>
  )
}

export default CounterContextProvider