import React, { useContext } from 'react'
import TestComponent from './TestComponent'
import { CounterContex } from './CounterContextProvider'

const AppRouter = () => {
    const contextData = useContext(CounterContex)
    console.log(contextData)
  return (
    <div>
        <h1>{contextData.count}</h1>
        <TestComponent/>
    </div>
  )
}

export default AppRouter