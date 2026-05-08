const classInfo = [

    {
        name: "Mohit",
        grade: "A+",
        city: "dehri"
    },

    {
        name: "Shyam",
        grade: "A",
        city: "Patna"

    },

    {

        ame: "Vinod",
        grade: "B+",
        city: "Ranchi"

    }
    
];

console.log(classInfo);

console.log(classInfo[0]);
console.log(classInfo[1]);
console.log(classInfo[2]);



console.log(classInfo[0].name);
console.log(classInfo[1].grade);
console.log(classInfo[2].city);
classInfo[0].city = "Banglore";
classInfo[0].gender = "Male";
classInfo[0].age = 20;
console.log(classInfo[0].city);

console.log(classInfo);