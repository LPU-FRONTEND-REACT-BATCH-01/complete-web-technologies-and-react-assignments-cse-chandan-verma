"use strict";
// type AvailablePaymentOption = "UPI" | "Card" | "COD" | "Netbanking" | "Cash"
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://dummyjson.com/products");
        const data = yield response.json();
        displayProducts(data.products);
    });
}
fetchProducts();
