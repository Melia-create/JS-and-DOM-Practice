const input = document.querySelector("#input");
const button = document.querySelector("#submit");
let listItem = document.createElement("li");
let list = document.querySelectorAll("ul")[0];

button.addEventListener("click", () => {
    listItem.textContent = input.value;
    list.appendChild(listItem);
});