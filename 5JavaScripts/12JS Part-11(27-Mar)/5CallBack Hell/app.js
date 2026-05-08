let h1 = document.querySelector("h1");

// // h1.style.color = "red";

// // but ham chahte hai ki color 1s ke baad chnage ho 

// // setTimeout(() => {
// //     h1.style.color = "red";
// // }, 1000);

// // // iske or 1s baad color orange ho jaye 

// // setTimeout(() => {
// //     h1.style.color = "orange";
// // }, 2000);

// // uske or 1s baad color green ho jaye 

// // setTimeout(() => {
// //     h1.style.color = "green";
// // }, 3000);



// // aise hi bahut saare sare kaam ho to 
// // har baar ek naya code nhi likhenege 
// // instead we make a fn for color change

// // comment all above code 


// function changeColor(color, delay) {
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);

// }


// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);



function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);

}

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("purple", 1000);
        });
    });
});

// jo upar likha hai whi Callback Hell hai



