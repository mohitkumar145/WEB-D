// // CDN1

// let newP = document.createElement('p');
// console.log(newP); // paragraph
// console.dir(newP); // paragraph object

// newP.innerText = "Hi, i'm a new Paragraph";

// // new paragraph par create ho gaya par ye abhi 
// // webpage par show nhi karega iske liye hame insert karna padega

// let body = document.querySelector("body");

// body.appendChild(newP); // INSERTING P IN BODY
// //  BODY KE SABSE LAST ME ADD HOGA APPEND KA MEANING
// //  HI KISI BHI CHIZ KO LAST ME ADD KARNA


// let box = document.querySelector(".box");
// box.appendChild(newP); // kisi ek hi jagah add hota hai copy nhi 
// // banti isl body ke last se ab box me aa jayega

// let button = document.createElement("button");
// console.dir(button);

// box.appendChild(button);
// button.innerText = "Submit";
// button.style.backgroundColor = "green";
// button.style.color = "white";
// button.style.borderRadius = "10px";


// // append


// let newHeading = document.createElement('h2');
// newHeading.innerText = "Welcome!";
// box.appendChild(newHeading);
// newHeading.append(" Back"); // appnend add text in same element
// let button2 = document.createElement("button");
// box.appendChild(button2);
// button2.style.backgroundColor = "red";
// button2.innerText = "button2";

// // but ham chhate hai ki button2 heading ke andar hi aaye isl we use appned


// newHeading.append(button2);
// newHeading.append(" Today Is 20 march");


// // prepend 

// // Para box me pehle aa jayega

// box.prepend(newP);

// let button3 = document.createElement("button3");
// box.appendChild(button3);
// button3.style.backgroundColor = "green";
// newHeading.prepend(button3);



// // first comment all above code




// insertAdjacement

// let btn = document.createElement('button');
// btn.innerHTML = "NEW BUTTON!!!";

// // ABOUt KE NICHHE JO PARA GR HAI USKE LIYE 

// let p = document.querySelector('p');

// p.insertAdjacentElement('beforebegin',btn);

// p.insertAdjacentElement('afterbegin',btn);
// p.insertAdjacentElement('beforeend',btn);
// p.insertAdjacentElement('atferend',btn);


// Remove Child



// let btn = document.createElement('button');
// btn.innerHTML = "NEW BUTTON!!!";
// let p = document.querySelector('p');
// p.insertAdjacentElement('afterend', btn);

// let body = document.querySelector('body');
// btn.remove();