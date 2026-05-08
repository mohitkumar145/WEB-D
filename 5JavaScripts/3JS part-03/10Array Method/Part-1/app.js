let vowels= ["a", "e", "i", "o", "u"];
console.log(vowels);

vowels.push("m", "n");
console.log(vowels);


vowels.pop();
console.log(vowels);

vowels.pop();
console.log(vowels);

vowels.unshift("m", "n");
console.log(vowels);

vowels.shift();
console.log(vowels);

vowels.shift();
console.log(vowels);


// Part 2

let vowels2= ["a", "e", "i", "o"];
console.log(vowels);
vowels.indexOf("e"); 
console.log(vowels2.indexOf("o"));
console.log(vowels2.indexOf("b"));
console.log(vowels.indexOf("E"));

console.log(vowels2.includes("o"));
console.log(vowels2.includes("b"));
console.log(vowels2.includes("E"));

// Part 3

let vowels3= ["a", "e", "i", "o", "u"];
let nums = [2, 4, 6, 8, 10];
console.log (vowels3.concat(nums));
// Till now our original arrays remains unchanged
console.log (vowels3);
console.log (nums);
// we can store merge arrays in anorher new array
let newArr =  vowels3.concat(nums);
console.log (newArr);
// jo array pehle likhebge wo pehle merge hoga
console.log (vowels3.concat(vowels3));
console.log (nums.concat(vowels3));
console.log (nums.concat(nums));

console.log(vowels3.reverse());


