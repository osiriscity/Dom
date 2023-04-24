let list = document.querySelector("ol");
let lastLi = list.children[4];

list.prepend(lastLi)

let main = document.querySelector("main");
let section2 = main.children[1];
let section3 = main.children[2];
let title3 = section2.children[0];
let div = section3.children[0];
let title2 = div.children[0];

section2.prepend(title2) 
section3.prepend(title3)


section3.remove()