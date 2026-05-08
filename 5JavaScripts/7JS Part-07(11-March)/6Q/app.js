
// QI

// let square  = (n) =>{
//     return(n*n);
// }


// or

let square = (n) => (n * n);

// QII


let id = setInterval(() => {
    console.log("Hello World!");
}, 2000);
console.log(id);

setTimeout(() => {
    clearInterval(id);
      console.log("Clear Interval ran");
}, 10000);