let collcn = document.getElementsByTagName("p");

console.dir(collcn);
console.dir(collcn[0]);

console.dir(collcn[0].localName);
console.dir(collcn[0].tagName);
// let change innertext into Billionare
collcn[0].innerText = "Billionare";

let collcn2 = document.getElementsByTagName("span");
// emptyt html collecn coz hamne html me span tag use nhi kiya hai

console.dir(collcn2);
