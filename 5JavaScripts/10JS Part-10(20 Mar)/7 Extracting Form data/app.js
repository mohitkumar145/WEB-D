let form = document.querySelector("form");

// to extract input value

form.addEventListener("submit", function (event) {
    let user = document.querySelector("#user");
    console.log(user);
    console.dir(user);
    console.log(user.value); // input value 
});


// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let user = document.querySelector("#user");
//     console.log("user = ", user.value); // input value 
//     let pass = document.querySelector("#pass")
//     console.log("pass=", pass.value); // input value 
//     alert(`Hi! ${user.value}, your password is set to ${pass.value}`);
// });

// upar wale code me hamne
// elemnt(user iput, pass input...)
// ko access karne ke liye individual ke liye query
// selector use kiya hai yeh  method bade level par data ke liye
// utna efficient nhi hota hai isl ise ham frequently
// utna USE NHIN KARTE


// Another Efficient Method

console.dir(form);
console.log(form.elements[0]);
console.log(form.elements[1]);
console.log(form.elements[2]);


form.addEventListener("submit", function (event) {
    event.preventDefault();
    let user = this.elements[0]; // same form.elements[0] coz this = form
    let pass = this.elements[1];
    alert(`Hi! ${user.value}, your password is set to ${pass.value}`);
});

