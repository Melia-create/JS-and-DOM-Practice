const list = document.getElementsByTagName("li");
const notPink = document.getElementsByClassName("not-pink");

// list.length;
// list[0];
// list[3];
// list[0].style.color = "pink";

for (let listIndex = 0; listIndex< list.length; listIndex++){
    list[listIndex].style.color="pink";
}

for (let listIndex = 0; listIndex< notPink.length; listIndex++){
    notPink[listIndex].style.color = "black";
}