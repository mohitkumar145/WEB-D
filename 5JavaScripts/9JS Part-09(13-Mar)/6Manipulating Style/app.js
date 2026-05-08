let image = document.querySelector("img");

console.log(image); // for image

console.dir(image); // for image Object

console.log(image.style); // style.obj

let heading = document.querySelector('h1');
console.dir(heading);

console.log(heading.style); // style object write in console

heading.style.color = "green";
heading.style.backgroundColor = "red";


// now class box ke anadar jitna anchor tag hai uska color change krna hai

let links = document.querySelectorAll(".box a"); // give collnc of anchor tags

console.dir(links);

for (let i = 0; i < links.length; i++) {
    links[i].style.color = "red";

}

// for better use "for of loops"

for (link of links) { // "link" word par error jaisa swow karta hai wo "for of loop" me generally show krta hai ignore this
    link.style.color = "green";

}

let box = document.querySelector(".box");
console.dir(box);

console.log(box.style); // all box style

// is stle me css ka koi bhi property show 
// nhi karega jo property hamne css file box class ke liye set ki hai 


