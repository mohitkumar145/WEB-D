
function saveToDb(data) {
    return new Promise((resolve, reject) => {

        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success : your data was saved");
        }
        else {
            reject("failure : your data was not saved");
        }
    });
};


// Then and Catch Methods

let request = saveToDb("Apna College"); //req = promise object
// console.log(request); // pending state me hoga
request.then(() => {
    // console.log("promise was resolved");
    console.log(request);

})
    .catch(() => { ``
       // console.log("promise was rejected");
        console.log(request);
    });



// //compact code diect fn hi use karo variable NavigationHistoryEntry

// saveToDb("Apna College")
//     .then(() => {
//         console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });


// for more than one use of then see promise chanining 

