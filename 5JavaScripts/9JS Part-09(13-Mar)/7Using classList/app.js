let img = document.querySelector("img");

console.log(img.classList);  // 2 classs abc and xyz


let heading = document.querySelector("h1");

console.log(heading.classList);  // zero abhi class nhi hai 


// Manipulation part

// add class in heading

heading.classList.add("green");
console.log(heading.classList);

// ab is class se css property apply kar sakte hai

// go in css file
// heading color green


heading.classList.add("underline"); // for all headings



// heading.setAttribute("class", "green");


// classAttribute se class set karne par keval
// wahi ek class use hota hai baaki jitna bhi
//  class hai use bekar kar deta hai
// isl underline wala class use nhi hoga

// isl ham class add karne ke lioye iska use na karke
//  classlistadd ka use krte hai



// // to remove class

// heading.classList.remove("pqr"); // property changed to default

console.log(heading.classList.contains("green")); // true

console.log(heading.classList.contains("head")); // false

heading.classList.toggle("head"); // head add

console.log(heading.classList.contains("head"));

heading.classList.toggle("head"); // head removed

console.log(heading.classList.contains("head")); // false

// let change BG color of publication info

let box = document.querySelector(".box");
box.classList.add("publInfo"); // now go in css file
 

