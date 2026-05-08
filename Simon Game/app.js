

// My Project


// // 1st Step

// for (btn of btns) {

//     btn.addEventListener("click", () => {
//         console.log("clicked");

//     });

// }

// // 2nd Step Flasbutton & Level Up

// for (btn of btns) {
//     btn.addEventListener("click", function () {
//         let btn = this;
//         btn.classList.add("flash");
//         setTimeout(function () {
//             btn.classList.remove("flash");
//         }, 250);
//         console.log(btn)
//     });
// }



// function userFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 250);

// }

// let btn = this;
// userFlash(btn);



// // 2nd Step Flasbutton & Level Up

let level = 0;
let gameSeq = [];
let userSeq = [];
let highScore = level;
let h3 = document.querySelector("h3");
h3.innerHTML = `Highest Score : ${highScore}`;

let btns = document.querySelectorAll(".btn");
console.log(btns);
let para = document.querySelector(".para");

let start = document.querySelector(".start");


start.addEventListener("click", function () {
    start.innerText = "Stop";
    para.innerText = `Level : ${level}`;

    levelUp();

});


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
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

    // 3rd step
    gameFlash(btn);

}

function checkAns(index) {
    if (userSeq[index] == gameSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            if (userSeq.length == gameSeq.length)
                setTimeout(levelUp, 1000);
        }
        console.log("same");

    }
    else {
        para.innerHTML = `Game Over! Your final score was <b> ${level} <br> press any key to start again`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "#000";
        }, 100);
        if (level > highScore) {
            highScore = level;
            h3.innerHTML = `Highest Score : ${highScore}`;
        }
        reset();
    }

}



// function checKAns(index) {

//     // console.log(`Current Level:${level}`); // jo value current level ki hogi utna hi gameSeqn or UserSeqn ka hoga

//     if (userSeq[index] == gameSeq[index]) {
//         if (userSeq.length == gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//         // console.log("same");
//     } else {
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function () {
//             document.querySelector("body").style.backgroundColor = "white";
//         }, 100);

//         // )

//         if (level > highScore) {
//             highScore = level;
//             h3.innerHTML = `Highest Score : ${highScore}`;
//         }
//         reset();
//     };

// };


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



function reset() {
    gameSeq = [];
    userSeq = [];
    level = 0;

};





