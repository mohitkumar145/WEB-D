// const url = "https://randomuser.me/api/";

// async function getUser() {
//     let res = await fetch(url); // it gives html form data
//     let data = await res.json();   // convert html to JSON
//     console.log(res);
//     console.log(data);
//     console.log(data.results[0].name.first);
//     console.log(data.results[0].gender);
//     console.log(data.results[0].email);
//     console.log(data.results[0].login);
// }

// getUser();





// using axios



// const url4 = "https://randomuser.me/api/";

// async function getUser() {
//     let res = await axios.get(url4);
//     console.log(res);
//     console.log(res.data); // already JSON
//     console.log(res.data.results[0].name);
//     console.log(res.data.results[0].name.first);
//     console.log(res.data.results[0].email);
// }

// getUser();



// CatFact Api




// const url2 = "https://catfact.ninja/fact";

// async function getFact() {
//     let res = await axios.get(url2);
//     console.log(res);
//     console.log(res.data); // already JSON
//     console.log(res.data.fact);
//     // console.log(res.data.results[0].name.first);
//     // console.log(res.data.results[0].email);
// }

// getFact();



// const url5 = "https://api.open-meteo.com/v1/forecast?latitude=20.2961&longitude=85.8245&current_weather=true";

// async function getWeath() {
//     let res = await axios.get(url5);
//     console.log(res);
//     console.log(res.data); // already JSON
//     console.log(res.data.current_weather);
//     console.log(res.data.current_weather.time);
//     console.log(res.data.current_weather.temperature);
//     // console.log(res.data.results[0].name.first);
//     // console.log(res.data.results[0].email);
// }

// getWeath();


const url6 = "https://geocoding-api.open-meteo.com/v1/reverse?latitude=20.2961&longitude=85.8245";

async function getCity() {
    let res = await axios.get(url6);
    console.log(res);
    console.log(res.data); // already JSON
    console.log(res.data.current_weather);
    console.log(res.data.current_weather.time);
    console.log(res.data.current_weather.temperature);
    // console.log(res.data.results[0].name.first);
    // console.log(res.data.results[0].email);
}

getCity();

