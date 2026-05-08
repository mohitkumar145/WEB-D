
const calculator = {
    num: 55,

    add: function (a, b) {
        return a + b;
    },

    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }
};

console.log(calculator.num);
console.log(calculator.add); // add fn
console.log(calculator.sub); // sub fn
console.log(calculator.mul); // mul fn

console.log(calculator.add(3, 4));
console.log(calculator.sub(3, 4));
console.log(calculator.mul(3, 4)); 


