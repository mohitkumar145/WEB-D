// let btn = document.querySelector(".butt1");

// console.dir(btn);


// btn.onclick = function () {
//     console.log("button was clicked");
//     alert("button was clicked");
// }


// // or 

// function sayHello() {
//     alert("Hello!");
// }

// btn.onclick = sayHello; // sayHello(); ye nhi likhna
// //  nhi to fn direct exucute ho jayega bina button
// //  click kiye

// // // select multiple butons



// let btns = document.querySelectorAll("button");
// for (btn of btns) {
//     btn.onclick = sayHello; // sayHello(); nhi likhna ye krne par value 
//     // pass ho jayegi

// }


// function sayHello() {
//     alert("Hello!");
// }




// onmouseenter 

let btns = document.querySelectorAll("button");
for (btn of btns) {
    btn.onclick = sayHello; // sayHello(); nhi likhna ye krne par value 
    // pass ho jayegi
    console.dir(btn);
    btn.onmouseenter = function onmouseenter() {
        console.log("you hover on a button");

    };

}


function sayHello() {
    alert("Hello!");
}

