// function pourOil(){
//     return new Promise((resolve, reject) => {
//         let pouredOil = true
//         setTimeout(() => {
//         if(pouredOil){
//             console.log("Oil Poured")
//             resolve()
//         }
//     }, 3000);
//     })
// }
// function addSpices(){
//     return new Promise((resolve, reject) => {
//         let addedSpices = true
//         setTimeout(() => {
//         if(addedSpices){
//             console.log("Spices Added")
//             resolve()
//         }
//     }, 1000);
//     })
// }
// function fryOnions(){
//     return new Promise((resolve, reject) => {
//         let friedOnions = false
//         setTimeout(() => {
//         if(friedOnions){
//             console.log("Onions Fried")
//             resolve()
//         }else{
//             reject("Onions are not fried yet")
//         }
//     }, 5000);
//     })
// }
// function addRice(){
//     return new Promise((resolve, reject) => {
//         let addedRice = true
//         setTimeout(() => {
//         if(addedRice){
//             console.log("Rice Added")
//             return
//         }
//     }, 4000);
//     })
// }

// addSpices().then(() => pourOil()).then(() => fryOnions()).then(() => addRice())

// async function cookBiryani(){
//     try{
//         await addSpices()
//         await pourOil();
//         await fryOnions();
//         await addRice();
//     }catch(error){
//         console.log("Error: ", error)
//     }
// }

async function fetchData() {
        let response = await fetch("http://localhost:8080/leave/holidays")
        let data = await response.json()
        console.log(data)
        
}


/* eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJjaGFuZGFuMDAwdnJtYUBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJ1c2VySWQiOjMsImZ1bGxOYW1lIjoiQ2hhbmRhbiIsImlhdCI6MTc3NTg5MDUxMCwiZXhwIjoxNzc1OTc2OTEwfQ.ZaEBNF5ieXLkPWQIGSVlG7qy1okziOBtD7ZbMCBZyDnYrFUeV7bQHs8lKlHItpud */

