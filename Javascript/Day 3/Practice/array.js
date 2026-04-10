let carData = [
    {
        id: 1,
        name: "Watch",
        price: 2499,
        quantity: 5
    },
    {
        id: 2,
        name: "Mobile",
        price: 14999,
        quantity: 10
    },
    {
        id: 3,
        name: "Laptop",
        price: 49999,
        quantity: 3
    },
    {
        id: 4,
        name: "Headphones",
        price: 1999,
        quantity: 15
    }
]

let totalValue = carData.reduce((initial_value, current_product) => {
    return initial_value + (current_product.price * current_product.quantity);
}, 0);

console.log("Total value of all products in the cart: " + totalValue);


let arr = ["Apple", "Banana", "Mango", "Lichi", "Strawberry", "Orange"]
arr.sort();
console.log(arr);

let num_arr = [1, 45, 63, 22, 98, 55]
num_arr.sort((a, b) => a-b)     //for sorting in ascending 
num_arr.sort((a, b) => a+b)     //for sorting in descending 
console.log(num_arr)

let filtered_array = arr.filter((value) =>{
    return value> 20
})
console.log(filtered_array)

