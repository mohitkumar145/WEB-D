
// let user = document.querySelector("#user");

// user.addEventListener("change", function (event) {
//     event.preventDefault();
//     console.log("input Chnaged");
//     console.log("Fibnal value = ", this.value);
// });

// // input me kuch bhi likho phir arrow kahin bhi
// // click kaaro button par screen par final value
// //  changed its tracks only initail and final value


// user.addEventListener("input", function (event) {
//     event.preventDefault();
//     console.log("input Chnaged");
//     console.log("Fibnal value = ", this.value);
// });


// lets a perform a activity jo bhi ham type kare 
// wo ek para me store ho 

let text = document.querySelector("#text");

text.addEventListener("input", function (event) {
    console.log(text.value);
    let para = document.querySelector("p");
    para.innerText = text.value;

});




