// const student = {
//     name: "Mohit",
//     marks: 78,
//     prop: this, // global scope
// };
// console.log(student);
// console.log(this) // Window object


// // Normal Fn

// const student2 = {
//     name: "Mohit",
//     marks: 78,
//     prop: this, // global scope
//     getName: function () {
//         console.log(this);
//         return this.name;
//     },
// };
// student2.getName();



// // For an Arrow Fn

// const student3 = {
//     name: "Mohit",
//     marks: 78,
//     prop: this, // global scope
//     getMarks: () => {
//         console.log(this); // arrow fn ke liye scope =  Parent's scope(or parent scope ko jisne call kiya hai wo uska scope hai since parent ko
//         //  window object ne call kiya isl parent ka scope window or arrow ka bhi window)
//         console.log(this.marks); // undefined
//         return this.marks;
//     },

// };
// student3.getMarks();



const student4 = {
    name: "Mohit",
    marks: 78,
    prop: this, // global scope
    getMarks: () => {
        console.log(this); // Parent's scope => Window
        return this.marks;
    },

    getInfo1: function () {
        setTimeout(() => {
            console.log(this) // student object
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this) // window object
        }, 2000);
    },

};
student4.getMarks();
student4.getInfo1();
student4.getInfo2();

