let btn = document.querySelector("button");

// Mouse Events

// btn.addEventListener("click", function(){
//      console.log(event);// jaise hi button click
//     //  karenge event print ho jayeg 
//     console.log("Button Clicked");
// });

// event ek default argument hai jo function me
//  hidden hota hai ham use bhi likh sakte hai
// koi pura event likhta hai to koi keval else(event/e) 


btn.addEventListener("click", function (event) { // event ke jagah e bhi likh skte ho
    console.log(event);
    console.log("Button Clicked");
});

// Double Click

btn.addEventListener("dblclick", function (event) { // event ke jagah e bhi likh skte ho
    console.log(event);
    console.log("Button was double Clicked");
});

// keyboard events 

let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//     console.log(event);
//        console.log("key = ",event.key);
//     console.log("code = ",event.code);

//     console.log("key was pressed");
// });


// inp.addEventListener("keyup", function () { // keyup
//     console.log("key was released");
// });


// lets create a mini game to move your cgharacter


// inp.addEventListener("keydown", function (event) {

//     console.log("code = ", event.code);
//     let codeValue = event.code; // ArrowUp, 
//     if (codeValue == "ArrowUp") {
//         console.log("Character moves forward")
//     }
//     else if (codeValue == "ArrowDown") {
//         console.log("Character moves backward")

//     } else if (codeValue == "ArrowLeft") {
//         console.log("Character moves left side")
//     } else
//         console.log("Character moves right side")
// });





// we can set according to our choise also
// let use our gaming keys W, A, S, D 
// 1st comment above gaming code

inp.addEventListener("keydown", function (event) {
    console.log("code = ", event.code);
    let codeValue = event.code; // ArrowUp, 
    if (codeValue == "KeyW") {
        console.log("Character moves forward")
    }
    else if (codeValue == "KeyS") {
        console.log("Character moves backward")

    } else if (codeValue == "KeyA") {
        console.log("Character moves left side")
    } else
        console.log("Character moves right side")
});





