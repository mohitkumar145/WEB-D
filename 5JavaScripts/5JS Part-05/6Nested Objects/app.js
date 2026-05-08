const classInfo = {

    Mohit: {
        grade: "A+",
        city: "dehri"
    },

    Shyam: {
        grade: "A",
        city: "Patna"
    },

    Vinod: {
        grade: "B+",
        city: "Ranchi"
    }

};

console.log(classInfo);
console.log(classInfo.Mohit);
console.log(classInfo.Mohit.city); // dehri
classInfo.Mohit.city = "Banglore";
console.log(classInfo.Mohit.city); // Banglore
console.log(classInfo);
console.log(classInfo.Mohit);
