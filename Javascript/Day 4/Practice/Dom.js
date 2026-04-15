// DOM - Document Object Model

// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate and interact with the content and structure of a web page using JavaScript.

// document - it is an object present inside our browser

// 1. document.getElementById()
// 2. document.getElementsByClassName()
// 3. document.getElementsByTagName()
// 4. document.querySelector()
// 5. document.querySelectorAll()


// let heading = document.getElementById("heading");
// let container = document.getElementsByClassName("container");
// let paragraph = document.getElementsByTagName("p");

// let heading = document.querySelector("#heading");
// let container = document.querySelector(".container");
// let paragraph = document.querySelector("p");

// console.log(heading);
// console.log(container);
// console.log(paragraph);

// let ul = document.querySelector("ul");

// let li = document.createElement("li");
// li.textContent = "Imposter"

// ul.after(li);

// let button = document.querySelector("button");

// button.addEventListener("click", () => {   
//     alert("Button clicked!");
// });
// heading.textContent = "This is a new paragraph created using JavaScript";
// paragraph.innerHTML = "This is a new paragraph created using JavaScript";

// let btn = document.querySelector("button");
// let input = document.querySelector("input");
// let list = document.querySelector("ul");

// btn.addEventListener('click', () =>{
//     let li =document.createElement("li");
//     let inputText = input.value;

//     li.textContent = inputText;
    
//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";

//     li.appendChild(deleteBtn);
//     list.appendChild(li);

//     deleteBtn.addEventListener('click', () => {
//         li.remove();
//     });

//     let completeTask = document.createElement("button");
//     completeTask.textContent = "Complete Task"

//     li.append(completeTask);
//     list.append(li);

//     completeTask.addEventListener('click', () =>{
//         li.style.textDecoration = "line-through"
//     })

// })


let parentContainer = document.querySelector(".parent-container")

let fetchData = async () => {
    let res = await fetch("https://dummyjson.com/products")
    let data = await res.json();
    console.log(data)
    displayData(data.products)
}

let displayData = (data) =>{
    data.map((product) =>{
        let container = document.createElement("ul")
        let title = document.createElement("li")
        let price = document.createElement("li")

        title.textContent = product.title;
        price.textContent = product.price;

        container.append(title, price)

        parentContainer.append(container)

    })
}

fetchData();