

let arr = document.querySelector("p");


console.dir(document.querySelector("p"));
console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(arr);
console.dir(arr.nodeType);
console.dir(arr.tagName);

// we can do nesting also

console.dir(document.querySelector("div a")); // div me 1st anchor tag ko select karega

console.dir(document.querySelectorAll("div a")); // All anchor tag inside Div


let obj = document.querySelectorAll("p");

