let greet = "Hello"; // global scope

function changeGreet() { // fn scope
    let greet = "Namaste";
    console.log(greet);
    function innerGreet() { // Lexical Scope
        console.log(greet);
    }
    // innerGreet();
}
console.log(greet);

changeGreet();


