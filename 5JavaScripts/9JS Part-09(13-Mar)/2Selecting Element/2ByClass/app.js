
let collecn = document.getElementsByClassName("oldImg");
console.dir(collecn);

for (let i = 0; i < collecn.length; i++) {
    console.dir(collecn[i])
}

for (let i = 0; i < collecn.length; i++) {
    console.dir(collecn[i].src)
}
for (let i = 0; i < collecn.length; i++) {
    collecn[i].src = "assets/spiderman_img.png"
    console.log(`value of image no ${i} is changed`);
    console.dir(collecn[i].src)

}


// jab bhi ham byclass me kuch bhi ya bhir empty value rakhte to ById ki tarah null value nhi dega
// hai html collemnc dega par html coll zero rhega rhega 

let collecn2 = document.getElementsByClassName("");
console.dir(collecn2);
let collecn3 = document.getElementsByClassName("anything");
console.dir(collecn3);



