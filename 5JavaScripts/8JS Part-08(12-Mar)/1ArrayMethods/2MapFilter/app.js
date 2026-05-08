let num = [1, 2, 3, 4];

let double =num.map((el) => {
    return el*2;
});
console.log(double);


let double2 = num.map((el) => {
});                           // is case double2 create hoga uska size bhi original ke same rhega bas element undefined rhega
console.log(double2);


// // Converts students marks into gpa


// let students = [{
//     name: "Mohit",
//     marks: 78,
// },
// {
//     name: "Kajal",
//     marks: 98,
// },
// {
//     name: "Vinod",
//     marks: 88,
// }
// ];

// let gpa = students.map((el) => {
//     return el.marks / 10;
// });

// console.log(gpa);



// // arr2.forEach((students) => {
// //     console.log(students); // student details
// // });


// // arr2.forEach((students) => {
// //     console.log(students.marks); // student marks
// // });



// Filter

let num2 = [10, 12, 13, 14, 6, 7, 8 ,2 ];

// filter even no

let newArr = num2.filter((el) => {
    return (el % 2 == 0);
});
console.log(newArr);


let oddNo = num2.filter((el) => {
    return !(el % 2 == 0);
});
console.log(oddNo);

