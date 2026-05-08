let student = {
name : "mohit",
marks:90,
age: 20,
city:"dehri"
};

console.log(student);
console.log(student.city);
console.log(student.gender); // undefined

// chnage the city mumbai
// add new property gender :male;
// chane the marks to "A"

student.city = "mumbai";
student.gender = "Male";
student.marks = "A";

console.log(student);
console.log(student["city"]);
console.log(student.gender); // undefined

// we can add array also
student.marks = ["PCM Marks", 73, 63, 88 ];  

console.log(student);

// Also, we can delete key value

delete student.age;

console.log(student);
