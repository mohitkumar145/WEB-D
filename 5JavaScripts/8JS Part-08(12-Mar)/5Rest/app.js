function sum(...arg) {
    for (let i = 0; i < arg.length; i++) {
        console.log("you gave us:", arg[i]);
    }
}
sum(2);
sum(3, 5);

function min() {
    console.log(arguments);
}

min(5, 7, 8, 3);

// // arguments as an array gives error

// function assume() {

//      return arguments.reduce((sum, el)) => (sum + el); // it gives error coz arg. not an array

// }

function sum2(...args) {
    console.log(args.reduce((sum, el) => sum + el)); // 138
    return args.reduce((sum, el) => sum + el);

}

sum2(2, 4, 8, 10, 5, 4, 5, 100);



