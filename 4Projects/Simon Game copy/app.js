

// // My Project


// // // 1st Step

// // for (btn of btns) {

// //     btn.addEventListener("click", () => {
// //         console.log("clicked");

// //     });

// // }

// // // 2nd Step Flasbutton & Level Up

// // for (btn of btns) {
// //     btn.addEventListener("click", function () {
// //         let btn = this;
// //         btn.classList.add("flash");
// //         setTimeout(function () {
// //             btn.classList.remove("flash");
// //         }, 250);
// //         console.log(btn)
// //     });
// // }



// // function userFlash(btn) {
// //     btn.classList.add("flash");
// //     setTimeout(function () {
// //         btn.classList.remove("flash");
// //     }, 250);

// // }

// // let btn = this;
// // userFlash(btn);


// // // 2nd Step Flasbutton & Level Up


// let gameSeq = [];
// let userSeq = [];
// let level = 0;
// let started = false;

// let btns = document.querySelectorAll(".btn");
// let start = document.querySelector(".start");
// let para = document.querySelector(".para");
// let highScore = level;
// let h3 = document.querySelector("h3");
// h3.innerHTML = `Highest Score : ${highScore}`;
// // console.log(btns);

// start.addEventListener("click", function () {
//     if (started == false) {
//         start.innerText = "Stop";
//          levelUp();
//         started = true;
//     }

// });

// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 300);
// };

// function userFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 300);

// }

// function levelUp() {
//     level++;
//     para.innerText = `Level : ${level}`;
//     userSeq = []; // reset user value to zero after every LevelUp
//     let num = Math.floor(Math.random() * 4);
//     let btn = btns[num];
//     gameSeq.push(btn);
//     console.log("Game Seq :", gameSeq);

//     // 3rd step
//     gameFlash(btn);

// }

// function checkAns(index) {
//     if (userSeq[index] == gameSeq[index]) {
//         if (userSeq.length == gameSeq.length) {
//             if (userSeq.length == gameSeq.length)
//                 setTimeout(levelUp, 1000);
//         }
//         console.log("same");

//     }
//     else {
//         para.innerHTML = `Game Over! Your final score was <b> ${level}`;

//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function () {
//             document.querySelector("body").style.backgroundColor = "#000";
//         }, 100);
//         if (level > highScore) {
//             highScore = level;
//             h3.innerHTML = `Highest Score : ${highScore}`;
//             start.innerText = "Start again";
//         }
//         reset();
//     }

// }


// function btnPress() {
//     // to access which color btn is clicked
//     let btn = this;
//     userFlash(btn);
//     // 4th step
//     userSeq.push(btn);
//     console.log("User Seq : ", userSeq);
//     checkAns(userSeq.length - 1);

// }

// for (btn of btns) {
//     btn.addEventListener("click", btnPress);

// }

// function reset() {
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
//     started = false;

// };














// // My Project


// let gameSeq = [];
// let userSeq = [];
// let level = 0;
// let started = false;

// let btns = document.querySelectorAll(".btn");
// let start = document.querySelector(".start");
// let para = document.querySelector(".para");
// let highScore = level;
// let h3 = document.querySelector("h3");
// h3.innerHTML = `Highest Score : ${highScore}`;
// // console.log(btns);

// start.addEventListener("click", function () {
//     if (started == false) {
//         start.innerText = "Stop";
//         levelUp();
//         started = true;
//     }
//     else {
//         gameOver();
//     }

// });

// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 300);
// };

// function userFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 300);

// }

// function levelUp() {
//     level++;
//     para.innerText = `Level : ${level}`;
//     userSeq = []; // reset user value to zero after every LevelUp
//     let num = Math.floor(Math.random() * 4);
//     let btn = btns[num];
//     gameSeq.push(btn);
//     console.log("Game Seq :", gameSeq);

//     // 3rd step
//     gameFlash(btn);

// }

// function checkAns(index) {
//     if (userSeq[index] == gameSeq[index]) {
//         if (userSeq.length == gameSeq.length) {
//             if (userSeq.length == gameSeq.length)
//                 setTimeout(levelUp, 1000);
//         }
//         console.log("same");

//     }
//     else {
//         gameOver();
//     }

// }

// function btnPress() {
//     // to access which color btn is clicked
//     let btn = this;
//     userFlash(btn);
//     // 4th step
//     userSeq.push(btn);
//     console.log("User Seq : ", userSeq);
//     checkAns(userSeq.length - 1);

// }

// for (btn of btns) {
//     btn.addEventListener("click", btnPress);

// }

// function gameOver() {
//     para.innerHTML = `Game Over! Your final score is <b> ${level}`;
//     document.querySelector("body").style.backgroundColor = "red";
//     setTimeout(function () {
//         document.querySelector("body").style.backgroundColor = "#000";
//     }, 100);
//     if (level > highScore) {
//         highScore = level;
//         h3.innerHTML = `Highest Score : ${highScore}`;
//     }
//     start.innerText = "Start again";
//     reset();
// }

// function reset() {
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
//     started = false;

// };









// My Project


let gameSeq = [];
let userSeq = [];
let level = 0;
let started = false;

let btns = document.querySelectorAll(".btn");
let start = document.querySelector(".start");
let para = document.querySelector(".para");
let highScore = level;
let h3 = document.querySelector("h3");
h3.innerHTML = `Highest Score : ${highScore}`;
// console.log(btns);

start.addEventListener("click", function () {
    if (started == false) {
        start.innerText = "Stop";
        levelUp();
        started = true;
    }
    else {
        gameOver();
    }

});

function gameFlash(btn) {

    btn.classList.add("light");
    setTimeout(function () {
        btn.classList.remove("light");
    }, 300);
};

function userFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);

}

function levelUp() {
    level++;
    para.innerText = `Level : ${level}`;
    userSeq = []; // reset user value to zero after every LevelUp
    let num = Math.floor(Math.random() * 4);
    let btn = btns[num];

    gameSeq.push(btn);


    console.log("Game Seq :", gameSeq);
    let size = gameSeq.length;
    // console.log(size);

    for (let i = 0; i < size; i++) {
        let btn = gameSeq[i];
        console.log(btn);

        setTimeout(() => {
            gameFlash(btn);
        }, 600 * (i + 1));


    }

    // let i = 0;
    // let color = gameSeq[i];

    // let id = setInterval(() => {
    //     gameFlash(color);
    //     i++;

    // }, 250);
    // setTimeout(() => {
    //     clearInterval(id);
    // }, 500);



    // for (btn of gameSeq) {

    //     setTimeout(() => {
    //         gameFlash(btn);
    //     }, 600 * (i + 1));


    // }


    // 3rd step
    // console.log(gameSeq);
    // gameFlash(btn);
}

function checkAns(index) {
    if (userSeq[index] == gameSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            if (userSeq.length == gameSeq.length)
                setTimeout(levelUp, 1000);
        }
        // console.log("same");
    }
    else {
        gameOver();
    }
}

function btnPress() {
    // to access which color btn is clicked
    let btn = this;
    userFlash(btn);
    // 4th step
    userSeq.push(btn);
    console.log("User Seq : ", userSeq);
    checkAns(userSeq.length - 1);

}

for (btn of btns) {
    btn.addEventListener("click", btnPress);

}

function gameOver() {
    para.innerHTML = `Game Over! Your final score is <b> ${level}`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "#000";
    }, 100);
    if (level > highScore) {
        highScore = level;
        h3.innerHTML = `Highest Score : ${highScore}`;
    }
    start.innerText = "Start again";
    reset();
}

function reset() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
};
