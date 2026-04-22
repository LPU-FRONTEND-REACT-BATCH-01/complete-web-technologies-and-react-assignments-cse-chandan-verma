import React, { useContext } from 'react'
import { CounterContex } from './CounterContextProvider'

const TestComponent = () => {
    const {increment, decrement} = useContext(CounterContex)
    
  return (
    <div>
        <button onClick={decrement} >Decrement</button>
        <button onClick={increment} >Increment</button>
    </div>
  )
}

export default TestComponent