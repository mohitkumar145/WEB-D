

// fetch(url);

// // fetch(url); 


// console.log(fetch(url)); // give pomises
// fetch(url)
//     .then((res) => {
//         console.log(res);

//     })
//     .catch((err) => {
//         console.log("Error:-", err);
//     });

// // ek baar url edit kare error aa jayege


// // data ko read krbe ke liye 


// // code no 2

// // console.log(fetch(url)); // give pomises
// // fetch(url)
// //     .then((res) => {
// //         // console.log(res.json()); // ek obj hoga usi ke andar data hai
// //         // to print data
// //         res.json().then((data) => {
// //             console.log(data);

// //         })
// //     })
// //     .catch((err) => {
// //         console.log("Error:-", err);
// //     });


// // code no 2 comapct version


// fetch(url)
//     .then((res) => {
//         // console.log(res.json()); // ek obj hoga usi ke andar data hai
//         // to print data
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         console.log(data.fact);
//     })
//     .catch((err) => {
//         console.log("Error:-", err);
//     });


// // jab hame 2 requst bejna ho



// fetch(url)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log("data1 is = ", data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("data2 is = ", data2.fact);
//     })
//     .catch((err) => {
//         console.log("Error:-", err);
//     });

// // ye api calls asynchronus hai isl JS wait nhi krta resolve
// //  hone tak iske baad ka baaki code print kr deta hai

// console.log("Hello!");






// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     let res = fetch(url);
//     console.log(res);
// }
// getFacts();


let url = "https://catfact.ninja/fact";

async function getFacts() {

// to avoid error 
    try {

        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2);
        console.log(data2.fact);
    }
    catch (e) {
        console.log("error:-", e);
    }
};
getFacts();





