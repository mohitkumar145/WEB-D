// let num = [1, 2, 3, 4];
// let finalVal = num.reduce((res, el) => (res + el));
// console.log(finalVal);

// // to check every what i get in return value as tertms of res

// let num2 = [1, 2, 3, 4];
// let finalVal2 = num2.reduce((res, el) => {
//     // at the starting point "res = 0 hota hai"
//     console.log(res);
//     return res + el;
//     // el 1 ke liye kuch bhi print nhi hoga
//     // el 2 ke liye 1
//     // el 3 ke liye 3
//     // el 4 ke liye 6
// });
// console.log(finalVal2); // and then final val 10



// // // Is Upar wale code me array ke sabhi el. 
// // // ke sum nikalne ka logic likh hai


// let arr2 = [1, 4, 3, 2, 8, 5];

// let maxVal = arr2[0];
// for (let i = 0; i < arr2.length; i++) {

//     if (maxVal < arr2[i]) {
//         maxVal = arr2[i];
//     }

// }
// console.log(maxVal);


let arr3 = [1, 4, 3, 2, 8, 5];

let max = arr3.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }

});
console.log(max);




