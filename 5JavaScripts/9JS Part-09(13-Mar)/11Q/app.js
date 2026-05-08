
let body = document.querySelector("body");

let p1 = document.createElement("p");
p1.innerText = "Hey I'm red!";
body.append(p1);
p1.classList.add("red");

let h3 = document.createElement('h3');
h3.innerText = "Hey I'm blue h3!";
h3.classList.add("blue");
body.append(h3);

let div = document.createElement('div');
div.classList.add("box");
body.append(div);

let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
div.appendChild(h1);

let p2 = document.createElement('p');
p2.innerText = "ME TOO!";
div.append(p2);


// we can use prepend also instead of append







