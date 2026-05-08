// Show Random Image
// Dog Api "https://dog.ceo/api/breeds/image/random"

let url2 = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("#clk");
let img = document.querySelector("#img");

btn.addEventListener("click", async () => {
    let imgLink = await getImage();
    console.log(imgLink);
    img.src = imgLink;
});

async function getImage() {
    try {
        let res = await axios.get(url2);
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.message);
        return res.data.message;
    }
    catch (e) {
        console.log("error:-", e);
        return "No Image found";
    }
};




