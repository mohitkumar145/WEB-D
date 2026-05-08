// let btn = document.querySelector("button");


// btn.addEventListener("click", function (){

//     console.log(this);  // button ke liye ye event handler create hua hua isl ye this button dega
//     console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "green";

// });


// 


let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let para = document.querySelector("p");



// // ab ham chahte hai ki jis par bhi click kare uska color green o jaye

// // M-1 => select all items individual one by one 

// btn.addEventListener("click", function () {
//     console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "green";
// });

// h1.addEventListener("click", function () {
//     console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "green";
// });

// h3.addEventListener("click", function () {
//     console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "green";
// });

// para.addEventListener("click", function () {
//     console.log(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "green";
// });

// //A proffesional Programmer always reduce maximum redundancy 

// // Redundancy = aisa same type ka code jo baar -2 repeat hua bina repaet hu bhi l;ikh skte hai

// // Reduce Code 

// // ham ek new dn bana lenhge jisme color chane hota hai or phir jis bhi
// //  ememnt ke liye color chnage kartna hai usme is fn ko call kar denge

function changeColor() {
    console.log(this);
    console.dir(this.innerText);
    this.style.backgroundColor = "green";
};
btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
para.addEventListener("click", changeColor);



