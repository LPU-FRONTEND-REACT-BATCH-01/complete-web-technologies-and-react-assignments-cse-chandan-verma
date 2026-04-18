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

let sortByName = carData.sort((a, b) => {
    return a.name.localeCompare(b.name);
});

console.log(sortByName);

let sortByPrice = carData.sort((a, b) =>{
   return a.price-b.price
})
console.log(sortByPrice)

let moreThanPrice = carData.filter((a) => {
    return a.price>15000;
})
console.log(moreThanPrice)