let str = ["My", "name", "is", "Mohit"];

function concat(str) { // str ke kuch bhi likh sakte hai 
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    console.log(result);
    // return result;
}
concat(str);
console.log(concat(str));