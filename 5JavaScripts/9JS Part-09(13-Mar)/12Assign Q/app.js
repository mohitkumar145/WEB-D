let body = document.querySelector("body");


// Q 1 
let IP = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me";

body.append(IP);
body.append(btn);

// Q 2 

IP.placeholder = "username";
btn.id = "btn";


// Q 3 

let btn2 = document.querySelector("#btn");

console.log(btn2); // btn access
btn.style.backgroundColor = "blue";
btn.style.color = "white";

// Q 4

let h1 = document.createElement("h1");
body.append(h1);
h1.innerText = "DOM Practice";
h1.style.textDecoration = "underline";
h1.style.color = "purple";


//  Q 5 

let p = document.createElement("p");
body.append(p);
p.innerText = "SIGMA 9.0";
p.style.fontWeight = "bold";




