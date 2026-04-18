import React, { Component, useEffect, useState } from 'react'

const ConditionalRendering = () => {
    
    const[count1, setCount1] = useState(0)
    const[count2, setCount2] = useState(0)
    
    useEffect(() => {
        console.log("Use Effect got Excecuted");
    },[count2])

    let handleCount1 = () =>{
        setCount1(prev => prev+1)
    }

    let handleCount2 = () =>{
        setCount2(prev => prev+1)
    }

    console.log("Component Rendered!!!");
    
  return (
    <div>
        <h1>{count1}</h1>
        <button onClick={handleCount1}>Count 1</button>
        <h1>{count2}</h1>
        <button onClick={handleCount2}>Count 2</button>
    </div>
  )
}

export default ConditionalRendering