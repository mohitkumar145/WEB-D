let form = document.querySelector("form");



// function submit() {
//     alert("form Sumbmitted")
// }

// form.addEventListener("submit", submit);

// to avoid shift to action on trigger 
// we use  event.preventDEfault


function submit(event) {
    event.preventDefault();
    alert("form Sumbmitted")
}

form.addEventListener("submit", submit); // no Action shift

 