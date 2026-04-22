"use strict";
// type AvailablePaymentOption = "UPI" | "Card" | "COD" | "Netbanking" | "Cash"
// function discountOnPayment(amount:number, modeOfPayment:AvailablePaymentOption):number|string {
//     if(modeOfPayment === "UPI"){
//         amount -= amount/10;
//         return `You need to pay ${amount} after getting 10% discount on UPI`
//     }else if(modeOfPayment === "Card"){
//         amount -= amount/20;
//         return `You need to pay ${amount} after getting 5% discount on Card`
//     }else if(modeOfPayment === "COD"){
//         return "You got 50 bonus points on COD"
//     }else if(modeOfPayment === "Netbanking"){
//         return "Nothing"
//     }else{
//         return "We are not accepting Cash"
//     }
// }
// console.log(discountOnPayment(1000, "Cash"))
// 🔹 Display function
function displayProducts(products) {
    // Filtering
    const lessThan5 = products.filter(p => p.price < 5);
    const lessThan10 = products.filter(p => p.price < 10);
    // Sorting
    const sortAZ = [...products].sort((a, b) => a.title.localeCompare(b.title));
    const sortZA = [...products].sort((a, b) => b.title.localeCompare(a.title));
    // Category
    const mensShirts = products.filter(p => p.category === "mens-shirts");
    const beauty = products.filter(p => p.category === "beauty");
    // Render function
    function render(arr, id) {
        const container = document.getElementById(id);
        if (!container)
            return;
        arr.forEach(p => {
            const div = document.createElement("div");
            div.textContent = `${p.title} - $${p.price}`;
            container.appendChild(div);
        });
    }
    // Display
    render(lessThan5, "less5");
    render(lessThan10, "less10");
    render(sortAZ, "az");
    render(sortZA, "za");
    render(mensShirts, "mens");
    render(beauty, "beauty");
}
// Fetch (same as yours)
async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    displayProducts(data.products);
}
fetchProducts();
