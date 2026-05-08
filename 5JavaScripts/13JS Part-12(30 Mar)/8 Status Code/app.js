let obj = {
    a: undefined, // no error coz undefined value is valid in JS

};

let jsonRes = '{ "fact": "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.", "length": 142 }';
// JSON Data string ke form me store hai 

console.log(jsonRes);

console.log(jsonRes.fact); // abhi undefined dega coz abhi ye string hai not an object

let validRes = JSON.parse(jsonRes);

console.log(validRes.fact);// now its gives dtaat value 

let student = {
    name: "Mohit",
    Marks: "78%"
};
console.log(student.Marks);

let JSONString = JSON.stringify(student);
console.log(JSONString); // obj converts into strings



