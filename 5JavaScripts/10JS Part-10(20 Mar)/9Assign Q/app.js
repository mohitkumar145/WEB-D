
// // let user = document.querySelector("#user");

// // user.addEventListener("change", function (event) {
// //     event.preventDefault();
// //     console.log("input Chnaged");
// //     console.log("Fibnal value = ", this.value);
// // });

// // // input me kuch bhi likho phir arrow kahin bhi
// // // click kaaro button par screen par final value
// // //  changed its tracks only initail and final value


// // user.addEventListener("input", function (event) {
// //     event.preventDefault();
// //     console.log("input Chnaged");
// //     console.log("Fibnal value = ", this.value);
// // });


// // lets a perform a activity jo bhi ham type kare 
// // wo ek para me store ho 

// let text = document.querySelector("#text");

// text.addEventListener("input", function (event) {
//     console.log(text.value);
//     let para = document.querySelector("p");
//     para.innerText = text.value;

// });

// Q 1 


// // mouseout 
// let body = document.querySelector('body');
// let btn = document.querySelector('.btn');
// btn.addEventListener("mouseout", function(){
// console.log("Hii!")
// });


// keypress

// let body = document.querySelector('body');
// let btn = document.querySelector('.btn');
// btn.addEventListener("keypress", function () {
//     console.log("Hii!")
// });


// Q 2

const log = document.getElementById("log");
const input = document.querySelector("input");
input.addEventListener("keypress", logKey);
function logKey(e) {
  log.textContent += ` ${e.code}`;
}


