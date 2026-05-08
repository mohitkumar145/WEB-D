// // Q1 To square and sum the elements of an array 


// // Mam Soln

// let nums = [1, 2, 3, 4, 5];

// const square = nums.map((num) => num * num);
// console.log(square);

// let sum = nums.reduce((acc, cur) => acc + cur, 0);

// let avg = sum / nums.length;
// console.log(avg);

// let arr = [2, 5, 6, 7, 8, 8];
// let sum2 = 0;
// let avg2 = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     let avg2 = sum / arr.length;
//     console.log(avg2);
// }
// avg2(arr);


// // square

// let arr2 = [2, 5, 6, 7, 8, 8];
// let avg3 = (arr2) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] * arr[i]);
//     }
// }
// avg2(arr);


// // Q2
// let newArr = arr.map((el) => {
//     return el + 5;
// });
// console.log(newArr);


// // // Q3

// // let vowels = ["a", "e", "i", "o", "u"];
// // let vowels2 = vowels.map((el) => {
// //     return el.toUpperCase();
// // });
// // console.log(vowels2);

// // Q 4
// Mam soln 

// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((v) => v * 2),
// ];



let arr3 = [2, 3, 4, 5, 6, 7];


function doubleAndReturnArgs(arr3, ...args) {

    let newArr = map.arr3((el) => {
        return el;
    });

    console.log(newArr);
    console.log(...args.map(args * 2))

}

// doubleAndReturnArgs(arr3, 3, 4, 5, 6);


// let arr3 = [2, 3, 4, 5, 6, 7];

// function doubleAndReturnArgs(arr, ...args){

//     console.log(arr);
//     console.log(...args*2)

// }

// doubleAndReturnArgs(arr3, 3, 4, 5, 6);

