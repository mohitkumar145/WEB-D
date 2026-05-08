let para = document.querySelector('p');


console.dir(para);

console.dir(para.innerText);
console.dir(para.textContent);
console.dir(para.innerHTML);

// Manipuulation Part

para.innerText = "abc";
console.dir(para.innerText);

para.innerText = "xyz";
console.dir(para.innerText);
para.innerText = "Hi, I'm <b> Peter Parker </b>"; // bold ko bhi text i trh tret jrtta hai



para.innerHTML =  "Hi, I'm <b> Peter Parker </b>";

// underline Spider man

let heading = document.querySelector('h1');



console.dir(heading.innerHTML);


// heading.innerHTML = "<u> Spider Man </u>";

// or  

//ia code se hame heading me kya wo likhna nhi padega 

heading.innerHTML = `<u>${heading.innerHTML}</u>`;




