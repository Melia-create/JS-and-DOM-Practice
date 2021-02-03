const image = document.querySelector("#dog");
const myButton = document.querySelector("#submit");

myButton.addEventListener("click", () =>{
    if (image.style.display == "none") {
        image.style.display = "block";
        myButton.textContent =" Hide";
    } else {
        image.style.display = "none";
        myButton.textContent = "Show";
    }
})