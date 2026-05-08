
let names = ["tony", "bruce", "petter", "stever", "ABC", "XYZ", "PYQ"];

// let winner = names[0];
// let runnerup = names[1];
// let secondrunnerup = names[2];


// upar teeno variable ko copmact me likhne ke liye ke liye we use destr..

let [winner, runnerup, seconndrunnerup, ...others] = names;

console.log(winner);
console.log(runnerup);
console.log(others); // remaining all elemtns ...others is a "rest"


// destructuring objects

const student = {
    name: "Kajal",
    age: 16,
    class: 11,
    subjects: ["hindi", "english", "math", "science"],
    username: "kajal@123",
    password: "1224@",
    city3: "pune",

};

// // ab hame specfic element chayiye ham usk eliouye alag variable bana skte hai 

// let username = student.username;
// let password = student.password;
// console.log(username);
// console.log(password);

// // par upar wala taRIKA bahut sare element ho to shi nhi hai
// // so we use destructuring objects  


let { username, password } = student; // format
console.log(username);
console.log(password);




let { user } = student;
console.log(user); // gives undefined
// coz detructuring me student object ke
//  andar user key ke liye search kiya gaya
// or user ki to hai hi nhi



// but ham chahte hai ke username ki value use ho but kisi dusre variable me stored me then


let { username: user1, password: pass, city } = student;
console.log(user1);
console.log(pass);
console.log(city); // undefined

// user apni city ka value nhi diya 
// ham default value bhi de skte agr kisi key ki value na di ho to 


let { city2 = "mumbai" } = student;
console.log(user1);
console.log(pass);
console.log(city2);


// agr city object me to whi print hoga na ki baad wala 
let { city3 = "Madras" } = student;
console.log(user1);
console.log(pass);
console.log(city3); // Pune


