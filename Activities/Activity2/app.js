const myHeading = document.querySelector("#heading");
const listItems = document.querySelectorAll("green");
// const myList = document.querySelector("#list-parent");

myHeading.addEventListener("click", () => {
    myHeading.style.color = "pink";
});

// myList.addEventListener("click", () => {
//     myList.style.color = "green";
// });

for (let listItemsIndex = 0; listItemsIndex< listItems.length; listItemsIndex ++){
   listItems[listItemsIndex].style.color ="lightgreen";
};

/*CHALLENGE*/

// const colors = ['red', 'orange', 'yellow', 'lightgreen', 'blue', 'purple', 'pink'];
// const listItems = document.querySelectorAll("li");

// for (let listItemsIndex = 0; listItems.length; listItemsIndex++){
//     listItems[listItemsIndex].style.color = colors[listItemsIndex];
// }