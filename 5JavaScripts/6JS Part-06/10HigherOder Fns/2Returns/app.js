// let odd = function(n){

// console.log(!(n%2==0));

// }

// let even = function(n){

// console.log(n%2==0);

// }

// even(6); // true
// even(5); // F
// odd(6); // F
// odd(5); //T


// function oddOrEvenTest(request) {
//     if (request == "odd") {
//         let odd = function (n) {
//             console.log(!(n % 2 == 0));
//         }
//         return odd;

//     } else if (request = "even") {


//         let even = function (n) {

//             console.log(n % 2 == 0);
//         }
//         return even;
//     } else {
//         console.log("Wrong Request");
//     }
// }

// let request = "odd"; // even

// let func = oddOrEvenTest(request);
// // since request = odd so func work as odd fn

// func(3);// true
// // func(6);// F



// CDN 2


function oddOrEvenTest(request) {
    if (request == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0));
        }
    } else if (request = "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }
    } else {
        console.log("Wrong Request");
    }
}
let request = "odd"; // even
let func = oddOrEvenTest(request);
// since request = odd so func work as odd fn

func(3);// true
// func(6);// F



