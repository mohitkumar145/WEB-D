
function saveToDb(data) {
    return new Promise((resolve, reject) => {

        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success : your data was saved");
        }
        else {
            reject("failure : Primise rejected");
        }
    });
};


saveToDb("Mohit")
    .then((res) => {
        console.log("result of promise", res);
        return saveToDb("Hi!");
    })
    .then((res) => {
        console.log("result of promise", res);
        return saveToDb("kajal");
    })
    .then((res) => {
        console.log("result of promise", res);
    })
    .catch((err) => {
        console.log("error of promise", err);
    });

