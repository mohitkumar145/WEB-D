
// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);

//     });
// }


// // async function demo() {
// //     getNum();
// //     getNum();
// //     getNum();

// // }
// // demo();


// // ab chahte hai ki pehle ek num aaye
// //  then dusra num aaye isl we use "await"
// //  keyword ka use karenge.

// // "await" keyword promise ke
// //  resolve hone ka wait karta hai aur uske
// //  baad hi next line execute karta hai.
// //  "await" keyword se hum asynchronous
// //  code ko synchronous code ki tarah likh sakte hai.


// async function demo() {
//     await getNum();
//     await getNum();
//     getNum(); // ye dono ek sath hi honege coz hamne isko awaitnhi kiyahai
//     getNum();

// }
// demo();


// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("Color Changed to " + color);
//             // console.log("Color Changed to " + color);
//         }, delay);

//     });
// }
// changeColor("red", 1000)
//     .then(() => {
//         console.log("red color applied");
//         return changeColor("green", 1000);;
//     })
//     .then(() => {
//         console.log("green color applied");
//         return changeColor("blue", 1000);
//     })
//     .then(() => {
//         console.log("blue color applied");
//     });


// upar ko pure code await ke helps easy way me likhebeg



// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("Color Changed to " + color);
//             console.log("Color Changed to " + color);
//         }, delay);

//     });
// }

// async function demo() {
//     await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//     changeColor("purple", 1000);
//     changeColor("skyblue", 1000);
// }
// demo();


// // Handling Rejection in Async Await


let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("Promise Rejected");
            }
            h1.style.color = color;
            resolve("Color Changed to " + color);
            console.log("Color Changed to " + color);
        }, delay);

    });
}

async function demo() {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);


    let a = 6;
    console.log(a);
    console.log("num was created");
}
demo();



// // ham chhte the ki hamara num print ho par promise reject hone ki wajah se hamara num print nahi hua
// // isi ko handle karenge

// // we sue try and catch jtna bhi code ke part me hame doubt hai kin wo rejection dehga use try e daal


async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
    }
    catch (err) {
        console.log(" Error caught and the error is : ", err);
    };

    let a = 6;
    console.log(a);
    console.log("num was created");
}
demo();

