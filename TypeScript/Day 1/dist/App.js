"use strict";
// let a:number = 10;
// let fun = () => {
//     console.log("Hello World");
// }
// let input:unknown = true
// if(typeof input === "string"){
//     console.log(input.charAt(0).toUpperCase()+input.slice(1));
// }else if(typeof input === "number"){
//     console.log(input+100)
// }else if(typeof input === "boolean"){
//     console.log(!input)
// }
// let obj: object = {   it's not the way to declare object
//     id: 1,
//     name: "Nick"
// }
// console.log(obj.id)
//object : it will allow only non-primitive data types except null and undefined
//Object : it will allow both primitive and non-primitive data types except null and undefined
// let obj: {
//     id: number;
//     name: string
// } = {
//     id: 1,
//     name: "Nick"
// }
// console.log(obj.id)
// console.log(obj.name)        //best way to declare object
// let users:{
//     id:number,
//     name:string,
//     age:number,
//     isAvailable:boolean
// } = {
//     id:1,
//     name:"Nick",
//     age:23,
//     isAvailable:true  //we can't pass extra properties in object and we can't miss any property in object
// }       
// interface User{
//     id:number,
//     name:string,
//     display:()=>{
//     }
// }
// class User1 implements User {
//     id = 1;
//     name = "Nick"
//     display(): {} {
//         return {};
//     }
// }
// creae an array of product when i am trying to add the products in array if any of the properties from Id, title and prize is not there then it should not allow me to add it in the array
// interface Product {
//     id: number;
//     title: string;
//     prize: number;
// }
// let productsArray: Product[] = [
//     {
//         id: 1,
//         title: "Headphones",
//         prize: 3000
//     },
//     {
//         id: 2,
//         title: "Mobile Phone",
//         prize: 19999
//     }
// ];
// productsArray.push({
//     id: 3,
//     title: "Laptop",
//     prize: 54999
// });
// productsArray.push({
//     id: 4,
//     title: "Mouse",
//     prize: 589
// });
// console.log(productsArray);
// console.log(productsArray[0])
// console.log(productsArray[1].title)
// function display(name:string):void{
//     console.log(name.toUpperCase())
// }
// function fucntion2(name:string):never{
//     throw new Error("it's an error");
//     console.log("Unreachable Line!!!");
// }
// type n = number
// let a:n = ""
// type numberArray = number[]
// let arr:numberArray = [1,2,3,4]  //cannot be anything other than number array
// type User = "Admin" | "Manager" | "Employee"
// let chandan:User = "Admin"         //only admin or manager or employee can be used
// ? - to make it optional
// function display(name:string, age:number, email?:string){
//     console.log(`Name is ${name} and his age is ${age} and his mailId is ${email}`)
// }
// console.log(display("Chandan", 21))
// type Add = (a:number, b:number) =>{}   //{} it will accept anything except null and undefined
// let addition:Add = (a, b) =>{
//     return a +b
// }
// type AvailablePaymentOption = "UPI" | "Card" | "COD" | "Netbanking"
// function payment(modeOfPayment:AvailablePaymentOption){
//     return `You have paid using ${modeOfPayment}`
// }
// console.log(payment("UPI"))
