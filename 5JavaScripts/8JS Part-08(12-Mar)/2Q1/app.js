



// // to find min 

// let arr = [1, 4, 3, 2, 0, 8, 5];
// let min = arr.reduce((min, el) => {
//     if (min > el) {
//         return el;
//     } else {
//         return min;
//     }


// });
// console.log(min);


// same logic ko ham ek fn ke help se implement kar skte hai

function getMin(nums) {
    let min = nums.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
    console.log(min);
    return min;
}

let arr2 = [1, 4, 3, 2, 0, 8, 5, -4, -7];
getMin(arr2);




