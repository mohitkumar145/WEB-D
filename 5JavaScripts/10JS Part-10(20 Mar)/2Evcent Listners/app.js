
let btns = document.querySelectorAll("button");


// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onclick = sayName;

// }

function sayHello() {
    console.log("Hello!");
}

function sayName() {
    console.log("I'm mohit");
}


// upar me se koi ek hi value hi pruibnt hoga

// jab ham onclick par multiple propert set 
// krte hai to koi ek hi trigger hot ahi



// so we we use Event Listner

for (btn of btns) {
    // btn.addEventListener("click", sayHello); // 2 trigger at the same time
    // btn.addEventListener("click", sayName);


    btn.addEventListener("dblclick", function doublclick() {
        console.log("You click twice time");
    }); //(dblclick = doubleclick) tgrigger on double click
}

