let h4 = document.querySelector("h4");
console.log(h4.parentElement); /// div with class box

console.log(h4.children); // An empty html collecn coz h4 has zero children


let div = document.querySelector("div");

console.log(div.children); // gives 2 children h4 & ul
console.log(div.childElementCount); // gives no of childern (2)

let ul = document.querySelector("ul");
console.log(ul.parentElement);
console.log(ul.children); // 3 li li li
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);

console.log(ul.children[1].previousElementSibling); // li 0
console.log(ul.children[1].nextElementSibling); // li 2

// changing Spider Man color
let img = document.querySelector("#mainImg");
console.log(img.previousElementSibling);

img.previousElementSibling.style.color = "green"; // color chnaged to green
img.nextElementSibling.style.color = "skyblue"; // About Color Changed to sky Blue


