function sum(a, b) {

    return a + b;

}

// console section me jakar sum(3, 5); ye likho
// return 8 dega par print nhi hoga// 
// 


// print karne ke liye hame console.log likhna hi padega

console.log(sum(3, 5));

// let suppose hame 2 hi parameters se 3 number sum karwna hai 
//  we can write his type

console.log(sum(sum(4, 7), 6)); // 17



// after return fn remaining code does not exucute


function isAdult(age) {

    if (age >= 18) {
        return "adult";
    }
    else {

        return "not adult"
    }
    console.log("bye-bye"); // give nothing

}

isAdult(21);





