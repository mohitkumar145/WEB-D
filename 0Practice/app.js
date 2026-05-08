
// // for (el of arr) {
// //     setTimeout(function repeat() {
// //         console.log("Ji");
// //     }, 1000);
// // };

// let obj = {
//     name: "Mohit",
//     RollNo: "43",
//     class: "CSE 2nd SEM"

// };

// console.log(this);

// function vof() {


//     console.log(this);
// }
// console.dir(vof);

// let body = document.querySelector("body");
// body.addEventListener("click", () => {

// });

let id = setInterval(() => {
    console.log("Hi!");
}, 1000);

setTimeout(() => {

    clearInterval(id);
}, 4000);
