// //Q1

// let arr = [3, 4, 2, 6, 10];
// let sum = 0;
// let arrayAvg = (avgValue) => {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum / arr.length);
// }
// arrayAvg(arr);

// // Q2

// let isEven = n => {
//     if (n % 2 == 0) {
//         console.log(`${n} is Even No`);
//     } else
//         console.log(`${n} is Odd No`);
// }
// isEven(56);
// isEven(5);

// // Q3

// const object = {

//     message: 'hello world!',
//     logMessage() {
//         console.log(this.message);
//     }
// };
// // object.logMessage();

// setTimeout(object.logMessage, 1000); // iske jagah nichhe wala shi OP dega
// setTimeout(object.logMessage(), 1000);

//  Q4

let length = 4;

function callback() {

    console.log(this.length);

}

// callback();
// console.log(window.length);
// console.log(window);


const object = {
    length : 5,

    method(callback){
        callback();
    },
};

object.method(callback, 1, 2);


console.log(object.method);