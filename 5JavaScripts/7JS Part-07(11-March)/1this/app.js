const students = {
    name: "Mohit",
    age:20,
    eng: 81,
    math: 88,
    phy: 73,

    // getAvg() {
    //     console.log(students.name);
    //     let avg = (eng + math + phy) / 3;
    //     console.log(avg);
    // }

    
    getAvg() {
        console.log(students.name);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
        console.log(this);
    }

}

students.getAvg();


// Code no 2

function avg() {

console.log(this); // see note in copy

}

avg();

console.log(window); //