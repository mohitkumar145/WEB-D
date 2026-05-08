let arr = [1, 3, 0, 4, 5, 6, 7];
console.log(...arr);
console.log(Math.min(...arr));
console.log(Math.max(...arr));

let name = "Kajal";
console.log(...name);

 //Spread with litrels

let newArr = [...arr];
let crush = [...name];

console.log(crush);
console.log(newArr);
newArr.push(2);
console.log(newArr);


let odd = [3, 5, 7];
let even = [2, 4, 6];
let nums = [...odd, ...even];
let nums2 = [...even, ...odd];

console.log(nums);
console.log(nums2);


// Spread with Object

const data = {
    email : "abc@gmail.com",
    pass  : "1234",
                                                           
};
const dataCopy = { ...data,};
// add  additional property in datacopy
const dataCopy2 = { ...data, id : "2384"};

console.log(data);
console.log(dataCopy);
console.log(dataCopy2);

// add array or strings in object 

const obj1 = {...arr};
const obj2 = {...name};

console.log(obj1);
console.log(obj2);
