let h1 = document.querySelector("h1");

function saveToDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1; // 1 to 10
    console.log(internetSpeed);
    if (internetSpeed > 4) {
        success();
    }
    else {
        failure();
    }
}
// Callback Hell


// 2 data save karne ke liye 

saveToDb("Apna College", () => {
        console.log(" Success1: data1 was saved "); // 1st dta ke liye success ka callback
        saveToDb( // agar 1st data save ho jata hai to hi 2nd data save karna hota hai agr 1st data save nhi hota to 2nd data save karne ka koi point nhi hai
            "hello world",
            () => {
                console.log(" Success2: data2 was saved "); // 2nd data ke liye success ka callback
            }, () => {
                console.log("failure2: weak ineternet"); // 2nd data ke liye failure ka callback
            }
        );
    },
    () => {
        console.log(" Failure1: Weak internet connection. Your data was not saved"); // 1st data ke liye failure ka callback
    }
);



// ab suppose hamara 2nd data save ho gaya to ham 3rd data save karna chahte hai to ham 2nd data ke success callback me hi 3rd data save karne ka code likhenge

// Callback Hell (3 data save karne ke liye)


// saveToDb(
//     "Apna College",
//     () => {
//         console.log(" Success1: data1 saved "); // 1st dta ke liye success ka callback
//         saveToDb("hello world2", // agar 1st data save ho jata hai to hi 2nd data save karna hota hai agr 1st data save nhi hota to 2nd data save karne ka koi point nhi hai
//             () => {
//                 console.log(" Success2: data2 saved"); // 2nd data ke liye success ka callback
//                 saveToDb("hello world 3", // agar 1st data save ho jata hai to hi 2nd data save karna hota hai agr 1st data save nhi hota to 2nd data save karne ka koi point nhi hai
//                     () => {
//                         console.log(" Success3: data3 saved"); // 3rd data ke liye success ka callback
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
//         console.log(" Failur1: Weak internet connection. Your data was not saved"); // 1st data ke liye failure ka callback
//     }
// );

// upar ham bas itna kam kar rhe hai ki agr 1st dta svaed ho
//  tab 2nd data save hoga or 2nd bhi save ho tyab 3rd save
//  hoga but agr pehla save nhi nhua to 2nd save nhi
//  and 2nd save nhi hu 3rd bhi save nhi hoga bas itna ke liye ye code itn acoplex/hell dikh rha hai isi ko avoid krne ke liye wwe use {promises}