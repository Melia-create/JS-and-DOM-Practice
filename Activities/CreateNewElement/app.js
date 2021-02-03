
// const input = document.querySelector("#input");
// const button = document.querySelector("#submit");
// let listItem = document.createElement("li");
// let list = document.querySelectorAll("ul")[0];

// button.addEventListener("click", () => {
//     listItem.textContent = input.value;
//     input.value = "";
//     list.appendChild(listItem);
// });

// /*Challenge - Show/Hide Button*/
// const button2 = document.querySelector("#showhide")

// button2.addEventListener("click", () => {
//     if (list.style.display == "none"){
//         list.style.display = "block"    // shown
//         button2.textContent = "Hide";
//     } else {
//     list.style.display = "none"   //none - hidden
//     button2.textContent = "Show";
//     }
// })


/*REMOVING ELEMENTS*/
const input = document.querySelector("#input");
const button = document.querySelector("#submit");
const button2 = document.querySelector("#remove");
let listItem = document.createElement("li");
// let lastItem = document.querySelector("li:last-child");
const input = document.querySelector("#input");
const button = document.querySelector("#submit");
let listItem = document.createElement("li");

let list = document.querySelectorAll("ul")[0];

button.addEventListener("click", () => {
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = "";
});

button2.addEventListener("click", () => {
    let lastItem = document.querySelector("li:last-child");
    list.removeChild(lastItem);
    //list.removeChild(document.querySelector("li:last-child") - remove variable - same outcome
});


