const url = "https://icanhazdadjoke.com/";


async function getJokes() {

    try {
        const config =
        {
            headers: {
                Accept: "application/json"
            }
        };
        let res = await axios.get(url, config);
        console.log(res);
        console.log(res.data);
        console.log(res.data.joke); // gives data in html format we have to pass some headers see line no 7 ab suke us variable ko res me url ke baad pass kar denge
    }
    catch (err) {
        console.log("error was ", err);

    }
}

getJokes();


// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = {
//             headers: {
//                 Accept: "application/json"
//             }
//         };

//         let res = await axios.get(url, config);
//         console.log(res.data);       // pura JSON object
//         console.log(res.data.joke);  // sirf joke text
//     } catch (err) {
//         console.log("error was", err);
//     }
// }

// getJokes();


