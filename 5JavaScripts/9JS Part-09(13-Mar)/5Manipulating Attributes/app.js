let image = document.querySelector("img");

console.log(image); // GAVE IMG src gave image

console.dir(image); // gave img object 


console.log(image.getAttribute("id"));

// // change id

image.setAttribute("id", "spiderManImg");

console.log(image.getAttribute("id"));

// change spsider man iamge into last image

image.setAttribute("src", "assets/creation_3.jpeg");

console.log(image); // abhi pata kyun src change karne ke baad object de rha hai (write it in console it gaves src)

console.log(image.getAttribute("class")); // null abhi class set nhi hais

image.setAttribute("class", "Image");

console.log(image.getAttribute("class")); // Image


