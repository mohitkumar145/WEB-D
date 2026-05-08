let months = ["jan", "july", "march", "august"];

months.splice(0,1);
months.splice(1,0, "june");
console.log(months);

// or

months.splice(0, 2, "july", "june");
console.log(months);