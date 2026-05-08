let url = "http://universities.hipolabs.com/search?name";
let btn = document.querySelector("#clk");
let para = document.querySelector("#result");


btn.addEventListener("click", async () => {
    let country = document.querySelector("#ip").value;
    console.log(country);
    // let colleges = await getColleges(country);
    // console.log(colleges);
});

// let country = "Nepal";
// console.log(url);

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        console.log(res);
        console.log(res.data);
        return res.data
    }
    catch (e) {
        console.log("error was:", e);
        return [];
    }
};

getColleges();