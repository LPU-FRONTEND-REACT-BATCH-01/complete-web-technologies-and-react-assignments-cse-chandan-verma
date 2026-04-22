import React, { Component } from "react";
import { useState } from "react";
import Bulb from "./Day2/Components/Bulb";
import ConditionalRandering from "./Day2/Components/ConditionalRendering";
// import Card from "./Day1/Components/Card";
// import UserDetails from "./Day1/Components/UserDetails";

// export default class App extends Component{
//     render(){
//         return <h1>Helllloooo</h1>
//     }
// }

// let App = () =>{
//     let name = "Chandan"
//     let card1 = " C1"
//     let card2 = " C2"
//     return (
//         <div>
//             <h1>Hello {name} how are you ?</h1>
//             <label htmlFor="name">Enter your name: </label>
//             <textarea id="name"></textarea>
//             <h2>Good luck!!!</h2>
//             <Card var={card1}/>
//             <Card var={card2}/>
//         </div>
//     )
// }

// let App = () =>{
//     let u1 = {
//         id: 1,
//         username: "Chandan",
//         age: 22,
//         city: "Jalandhar"
//     }

//     let u2 = {
//         id: 2,
//         username: "Milind",
//         age: 22,
//         city: "Punjab"
//     }

//     let u3 = {
//         id: 3,
//         username: "Devansh",
//         age: 22,
//         city: "Phagwara"
//     }

//     return (
//         <div className="app">
//             <UserDetails userDetail={u1}/>
//             <UserDetails userDetail={u2}/>
//             <UserDetails userDetail={u3}/>
//         </div>
//     )
// }

//State In React
// const App = () => {

//     const [state, setState] = useState(10)
//     let normalVariable = 0;

//     let changeNormalVariable = () =>{
//         normalVariable += 5;
//     }
//     let changeSetState = () =>{
//         setState(20)
//         console.log("State variable changed")
//     }

//     let incrementStateVariable = () =>{
//         setState(prev => prev + 1)
//     }

//     let decrementStateVariable = () =>{
//         setState(prev => prev - 1)
//     }
//   return (
//     <div>
//         <h1>This is state variable {state}</h1>
//         <h1>This is normal Varibale {normalVariable}</h1>
//         <button onClick={changeSetState}> Change Value</button>
//         <button onClick={changeNormalVariable}> Change normal Value</button>
//         <br />
//         <button onClick={incrementStateVariable}>Increment</button>
//         <button onClick={decrementStateVariable}>Decrement</button>
//     </div>
//   )
// }

//password show-hide button
// const App = () => {

//     // const[showPassword, setShowPassword] = useState("password")
//     const[show, setShow] = useState(true)

//     // let handleShow = () => {
//     //     setShowPassword("text")
//     // }

//     // let hidePassword = () => {
//     //     setShowPassword("password")
//     // }

//     let togglePassword = () =>{
//         setShow(prev => !prev)
//     }

//   return (
//     <div>
//         <input type={show ? "password" : "text"} />
        
        
//         <button onClick={togglePassword}>{show ? <i className="fa-regular fa-eye" style={{color: "rgb(14,16,16)"}}></i> : <i className="fa-regular fa-eye-slash" style={{color: "rgb(24, 28, 28)"}}></i>}</button>
//         <br /><br />
//         {/* <button onClick={handleShow}>Show</button>
//         <button onClick={hidePassword}>Hide</button> */}

//     </div>
//   )
// }


// const App = () => {

//   let loggedIn = true

//   if(loggedIn){
//     return(
//       <div>
//         <h1>Welcome to Login Page</h1>
//       </div>
//     )
//   }else {
//     return (
//       <div>
//         <h1>Sign Up</h1>
//       </div>
//     )
//   }
// }


export const App = () => {
  return (
    <ConditionalRandering/>
    // <Bulb/>
  )
}

export default App