let imgObj = document.getElementById("mainImg");


console.dir(imgObj);
console.dir(imgObj.tagName);
console.dir(imgObj.id);
console.dir(imgObj.src);
// let src = imgObj.src;
imgObj.src = "assets/creation_2.jpeg"; // image changed

imgObj.height = 1000;

let paragId = document.getElementById("description");
console.dir(paragId);
console.dir(paragId.id);


// gives null jabhi empty value pass kare ha phir non defined

let collecn2 = document.getElementById("");
console.dir(collecn2);
let collecn3 = document.getElementById("anything");
console.dir(collecn3);

