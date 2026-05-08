// Q 1 bana dunga 


// //Q 2


// let name = prompt("Enter your name and age:");
// let age = prompt("Enter your age:");
// alert(`${name} is ${age} years old`);


// //Q 3

// let quarter = Number(prompt("Enter the Quarter"));

// // we use number coz

// // avaScript switch uses strict comparison (===) internally.
// // So this comparison happens:
// "1" === 1   // false


// switch(quarter){
//     case 1:
//         console.log("Jan, Feb, Mar");
//         break;

//     case 2:
//         console.log("Apr, may, Jun");
//         break;

//     case 3:
//         console.log("Jul, Aug, sep");
//         break;

//     case 4:
//         console.log("Oct, Nov, Dec");
//         break;

//     default:
//         console.log("Ivalid Quarter");

// }

// // Or

// quarter = prompt("Enter the Quarter");

// switch(quarter){
//     case "1":
//         console.log("Jan, Feb, Mar");
//         break;
//     case "2":
//         console.log("Apr, May, Jun");
//         break;
//     case "3":
//         console.log("Jul, Aug, Sep");
//         break;
//     case "4":
//         console.log("Oct, Nov, Dec");
//         break;
        
//     default:
//         console.log("Ivalid Quarter");
// }


// // Q 4

// let str = prompt("Enter a String");
// if((str[0] ==="a" || str[0] === "A") && str.length>=5)
// {
//     console.log("it is golden string");
// } else {

//      console.log("it is not s golden string");
// }


// // More Efficient (like A programmar)
// let str2 = prompt("Enter a String no 2");

// if (str2[0].toLowerCase() === "a" && str2.length > 5) {
//     console.log("It is a golden string");
// } else {
//     console.log("It is not a golden string");
// }

// Q 5
let num1 = prompt("Enter 1st num");
let num2 = prompt("Enter 2nd num");
if(num1[(num1.length)-1] === num2[(num2.length)-1])
{

console.log("same Last Digit")
} else {


    console.log("Last Digit not same")
}
