const input = document.querySelector("#input");
const button = document.querySelector("#submit");
const removeBtn = document.querySelector("#remove");
const listItems = document.querySelectorAll("li");
let list = document.querySelectorAll("ul")[0];


button.addEventListener("click", () => {
    let listItem = document.createElement("li");
   listItem.textContent = input.value;

   list.appendChild(listItem);

   input.value = '';
});

removeBtn.addEventListener ("click", () => {
    list.removeChild(document.querySelector('li:last-child'))
});

for (let listItem of listItems) {
    listItem.addEventListener("mouseover", () => {
        listItem.textContent = listItem.textContent.toUpperCase();
    });

    listItem.addEventListener("mouseout", () => {
        listItem.textContent = listItem.textContent.toLowerCase();
    });
}
