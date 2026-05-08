
// let url = "https://catfact.ninja/fact";

// async function getFacts() {


//     try {

//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2);
//         console.log(data2.fact);
//     }
//     catch (e) {
//         console.log("error:-", e);
//     }
// };
// getFacts();


// same above code using axios 

// performing a get request 



// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         console.log(res); // get obj
//         console.log(res.data);
//         console.log(res.data.fact);
//     }
//     catch (e) {
//         console.log("error:-", e);
//     }
// };

// getFacts();







// now we connect oor js to html go html file

// A  mini task

let btn = document.querySelector("#clk");
let para = document.querySelector("#result");

// btn.addEventListener("click", () => {
//     let fact = getFacts(); 

// // // since getFacts ek asynch fn so ye hamesha ek 
// // promise return krta hai isl ham call back fn 
// // ko async type ka banayenge or getFacts ko
// // await

//     console.log(fact); // promise obj
// });


btn.addEventListener("click", async () => {
    let fact = await getFacts(); // since getFacts ek asynch fn so ye hamesha ek promise return krta hai isl ham call back fn ko async type ka banayenge or getFacts kom await
    console.log(fact); // give same fact in console
    para.innerText = fact;
});

let url = "https://catfact.ninja/fact"; // API

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch (e) {
        console.log("error:-", e);
        return "No fact found";
    }
};



