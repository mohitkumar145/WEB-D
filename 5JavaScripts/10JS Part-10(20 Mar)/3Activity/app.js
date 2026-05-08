// Generate A Random Color


let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {

    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    console.log("color Upadated");
    let box = document.querySelector(".box");
    box.style.backgroundColor = randomColor;
});

function getRandomColor() {
    //     // my code
    // let red = (Math.floor(Math.random()*10)+1)*25.5;
    // let green = (Math.floor(Math.random()*10)+1)*25.5;
    // let blue = (Math.floor(Math.random()*10)+1)*25.5;

    // mam code

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}




// // we can create addEventListener for multiple for multiple elementns such as p, div anchor tag e.t.c

let parag = document.querySelector("p");
parag.addEventListener("click", function click() {
    console.log("Para Was cliciked");
});

// now we want print something  whenever is mouse hover on div 2 
let box2 = document.querySelector('.box2');
box2.addEventListener("mouseenter", function print() {

    console.log("mohit");

});


