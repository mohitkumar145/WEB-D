
// // Q1

// let n = 6;
// let a = [2, 5, 6, 8, 3, 7];

// function largerNumber(Arr, numb) {
//     for (let i = 0; i < Arr.length; i++) {
//         if (numb < Arr[i]) {
//             console.log(Arr[i]);
//         }
//     }
// }

// largerNumber(a, n);


//Q2

// let str = "abcdabcdefgggh";
// let newStr = "acegpqrstovws";
// console.log(newStr.length);
// console.log(str.length);


// function extUniqchar(str, newStr) {
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < newStr.length; j++) {
//             if (str[i]!==newStr[j]) {

//                 // newStr.push(str[i]);
//                 // console.log(str[i]);

//             }
//         }
//     }
//     console.log(newStr);
// }
// extUniqchar(str, newStr);



// let str = "abcdabcdefgggh";
// let newStr = "acegpqrstovws";
// console.log(newStr.length);
// console.log(str.length);
// for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < newStr.length; j++) {
//         if (!(str[i] === newStr[j])) {
//             // newStr.push(str[i]);
//             console.log(str[i]);
//             break;
//         }
//     }
// }


let str = "abcdabcdefgggh";
let newStr = "acegpqrstovws";

for (let i = 0; i < str.length; i++) {

    let found = false;

    for (let j = 0; j < newStr.length; j++) {
        if (str[i] === newStr[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        console.log(str[i]);
    }
}


// function extUniqchar(str, newStr) {
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < newStr.length; j++) {
//             if (!(str[i] === newStr[j])) {
//                 // newStr.push(str[i]);
//                 console.log(str[i]);

//             }
//         }
//     }
// }
// extUniqchar(str, newStr);










