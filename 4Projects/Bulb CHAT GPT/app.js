let div1 = document.querySelector(".div1");
console.log(div1);




function sp() {
    div1.classList.add("light");
    setTimeout(function flash() {

        div1.classList.remove("light");

    }, 1000);


};
sp();
console.log(sp);

