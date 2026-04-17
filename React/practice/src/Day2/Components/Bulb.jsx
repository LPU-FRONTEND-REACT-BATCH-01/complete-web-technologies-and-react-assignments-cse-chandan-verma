import React, { useState } from 'react'
import On from '../assets/bulbOn.png'
import Off from '../assets/bulbOff.png'

const Bulb = () => {
    const[bulb, onOff] = useState(true)

    let toggleBulb = () =>{
        onOff(prev => !prev)
    }
  return (

    <div style = {{textAlign: 'center'}}>
        <img src={bulb ? On : Off}></img>
        <br />
        <button onClick={toggleBulb}>{bulb ? "Off" : "On"}</button>
    </div>
  )
}
export default Bulb