let arr = [1, 2, 3, 4, 5];
let print = function (el) {
    console.log(el);
}
arr.forEach(print);

//Or phir direct fn ko hi pass kar do

// arr.forEach(function (el) {
//     console.log(el);
// });

// arr.forEach((el) => {
//     console.log(el);
// });



// We can use foreach for object also inside an array


let arr2 = [{
    name: "Mohit",
    marks: 78,
},
{
    name: "Kajal",
    marks: 98,
},
{
    name: "Vinod",
    marks: 88,
}
];

arr2.forEach((students) => {
    console.log(students); // student details
});


arr2.forEach((students) => {
    console.log(students.name); // student marks
});

arr2.forEach((students) => {
    console.log(students.marks); // student marks
});