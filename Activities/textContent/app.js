const placeHolder = document.querySelector("#placeholder");
const myInput = document.querySelector("#input");
const mySubmit = document.querySelector("#submit");
const myList = document.querySelector("#list");

mySubmit.addEventListener("click", () => {
    placeHolder.style.color = "pink";
    placeHolder.textContent = input.value;
    // placeHolder.textContent = `<li>${input.value}</li>`;

    myList.innerHTML = `<li> ${input.value} </li>`; 
    //Replaces ALL list content in HTML
});