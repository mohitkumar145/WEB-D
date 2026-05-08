
// // Code No 1

// let greet = function(){

// console.log("Hello");
// }
// greet();
// greet();
// greet();
// greet();


// Code No 2

function multipleGreet(func, count) { // higher order fn
  for (let i = 1; i <= count; i++) {
    func();
  }
}

let greet = function () {

  console.log("Hello");
}

multipleGreet(greet, 4);  //or

// we can pass direct fn as an arg

multipleGreet(function () { console.log("Namaste") }, 4);

