
// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1; // 1 to 10
//     console.log(internetSpeed);
//     if (internetSpeed > 4) {

//         success();
//     }
//     else {
//         failure();
//     }
// }

// // ab suppose hamara 2nd data save ho gaya to ham 3rd data save karna chahte hai to ham 2nd data ke success callback me hi 3rd data save karne ka code likhenge

// // Callback Hell (3 data save karne ke liye)

// saveToDb(
//     "Apna College",
//     () => {
//         console.log(" Success: Your data was saved "); // 1st dta ke liye success ka callback
//         saveToDb("hello world2", // agar 1st data save ho jata hai to hi 2nd data save karna hota hai agr 1st data save nhi hota to 2nd data save karne ka koi point nhi hai
//             () => {
//                 console.log(" Success2: dat2 saved"); // 2nd data ke liye success ka callback
//                 saveToDb("hello world 3", // agar 1st data save ho jata hai to hi 2nd data save karna hota hai agr 1st data save nhi hota to 2nd data save karne ka koi point nhi hai
//                     () => {
//                         console.log(" Success3: dat3 saved"); // 3rd data ke liye success ka callback
//                     }, () => {
//                         console.log("failure3: weak ineternet"); // 3rd data ke liye failure ka callback
//                     }
//                 );
//             }, () => {
//                 console.log("failure2: weak ineternet"); // 2nd data ke liye failure ka callback
//             }
//         );
//     },
//     () => {
//         console.log(" Failur: Weak internet connection. Your data was not saved"); // 1st data ke liye failure ka callback
//     }
// );

// // upar ke code me kaphi sara code ek dusrre ke andar nested ho gaya hai isse code ko samajhna aur maintain karna dono hi mushkil ho jata hai is problem ko callback hell kehte hai

// // or aise hi codition ko asynchronous function kehte hai ismme bahut sare code ek dusre par depend karte hai aur ek ke bina dusra exucute nhi ho skta hai





//Promises version of the above code

function saveToDb(data) {
    return new Promise((resolve, reject) => {

        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            console.log(" Success: Your data was saved ");
            resolve("success : your data was saved");
        }
        else {
            console.log(" Success: Your data was not saved ");
            reject("failure : your data was not saved");
        }
    });
};

saveToDb("Apna College"); // write this in console to see the output of the above code


