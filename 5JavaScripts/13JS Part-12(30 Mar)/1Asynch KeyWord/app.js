async function greet() {
    return "Hello!"; // gives a promise with Hello Result
};

async function greet() {// gives a promise with null Result
};

async function greet() {
    abc.abc();
    // gives a promise with rejected coz abc is not defnied
};
// console.log(greet()); 


// one maore way to get error by fn

// "throw" is a keyword which is
// used to throw an error. It can
//  be used to create custom errors 
// or to throw built-in errors.;

async function greet() {
    throw "Some Random Error"; // gives a promise with rejected and result is "Some Random Error"
    return "Hello!";
}
// console.log(greet());


greet().
    then((res) => {
        console.log("Promise was resolve", res);
    })
    .catch((err) => {
        console.log("Promise was rejected : ", err);
    });

let demo = async () => {
    return 5;
}

demo().
    then((res) => {
        console.log("Promise was resolve", res);
    })
    .catch((err) => {
        console.log("Promise was rejected : ", err);
    });
console.log(demo()); // res with 5

