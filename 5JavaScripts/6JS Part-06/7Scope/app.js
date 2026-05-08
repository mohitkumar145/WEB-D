// // Function Scope

// let sum = 89; // global scope

// function calSum(a, b) {
//     // let sum = a + b;
//     // abhi global sum print hoga coz 
//     // agr fn ka khud ka varible na ho to wo 
//     // gloabal wala use karta hai
//     console.log(sum);
// }

// calSum(3, 5);
// console.log(sum);



// Block Scope


{

    let a = 35;
    const b = 34;
    var c = 36;
}

// console.log(a);  // undefined
// console.log(b); // undefined
// console.log(c); // 36



// Lexical Scope


function outerFunc() {
    let y = 4;
    let x = 5;
    console.log(x);
    function innerFunc() {
        let z = 7;
        console.log(x);
    }
    innerFunc();
}
outerFunc();