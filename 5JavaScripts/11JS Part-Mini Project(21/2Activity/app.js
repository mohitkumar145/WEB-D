let body = document.querySelector('body');
let btn = document.querySelector('button');
let ip1 = document.querySelector('#ip1');
let p1 = document.querySelector('#p1');
let ul = document.querySelector('.ul');
//   ul.children[0].innerText = "Mohit";
// console.dir(ul.children[0]);

let btn2 = document.querySelector(".del1");
let btn3 = document.querySelector(".del2");



btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = ip1.value;

    let delBtn = document.createElement('button');
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    ip1.value = ""; // user input

});


// to remove elments when we click on delete buttons

let delBtns = document.querySelectorAll(".delete");
for (delBtn of delBtns) {
    delBtn.addEventListener("click", function () {

        console.log("element Deleted");
        let par = this.parentElement; // access delete parent Element so we ban delete this
        console.log(par);
        par.remove();
    });

}

// we will notice only already exicting elements can 
// be dele new add elements can't; coz it works only 
// for exicting elemnts  










// btn.addEventListener("click", function () {
//     let item = document.createElement("li");
//     ul.appendChild(item);
//     ul.children[i].innerText = ip1.value;
//     i++;

// });
