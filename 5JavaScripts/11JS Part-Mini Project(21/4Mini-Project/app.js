
// 1st Step Game Start

let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "blue", "yellow"];

let started = false;
let level = 0;
let highScore = level;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
h3.innerHTML = `Highest Score : ${highScore}`;

document.addEventListener("keypress", function () {
    // game ek hi baar syart hota hai har baar key press krne har
    //  baar st nhi hota isl ye condn
    if (started == false) {
        console.log("game is Started");
        started = true;
    }
    levelUp();
});

// 2nd Step Flasbutton & Level Up


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

};

function userFlash(btn) {
    btn.classList.add("flash2");
    setTimeout(function () {
        btn.classList.remove("flash2");
    }, 250);

};

function levelUp() {
    userSeq = []; // reset user value to zero after every LevelUp
    level++;
    h2.innerText = `Level ${level}`;

    let randNum = Math.floor(Math.random() * 4);
    let randColor = btns[randNum];
    let randBtn = document.querySelector(`.${randColor}`); // select random class among four color

    // console.log(randNum)
    // console.log(randColor);
    // console.log(randBtn)

    // 4th step

    gameSeq.push(randColor);
    console.log("Game Seq :", gameSeq);


    // 3rd step
    gameFlash(randBtn);

};

// 4th step ( // user no jo color press kiya wo match kiya ki nhi uske liye 

function checKAns(idx) {

    // console.log(`Current Level:${level}`); // jo value current level ki hogi utna hi gameSeqn or UserSeqn ka hoga

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
        // console.log("same");
    } else {
        // h2.innerText = `Game Over! press any key to start again`;
        // 5th step (
        h2.innerHTML = `Game Over! Yoor final score was : <b> ${level} <br> press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "";
        }, 100);

        // )

        if (level > highScore) {
            highScore = level;
            h3.innerHTML = `Highest Score : ${highScore}`;
        }
        reset();
    };

};

// )

// Ab hame ek random button flash karayenge
// jiske liye ham ek array create karnge  see btns array

function btnPress() {
    // to access which color btn is clicked
    let btn = this;
    userFlash(btn);

    // 4th step

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log("User Seq : ", userSeq);
    checKAns(userSeq.length - 1);
};

// 3rd Step

// Button Event Listener


let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
};

//4th Step

// Mathing sequence

// Accessing empty array

// 5th step (Reset Game)



function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

};






