let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color Changed");
        }, delay);
    });
}

let requestPromise = changeColor("purple", 5000);
console.log(requestPromise); // sttatus pending

setTimeout(() =>{
console.log(requestPromise); // gives color cahnaged
}, 5200)


// YE PROMISE CHANING KA USE KARKE 
// HAM COLOR CHANGE CODE LIKHA JO CALLBACK
//  HELL SE THODA SA IMPROVED HAI

changeColor("red", 1000)
    .then(() => {
        console.log("red color applied");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("orange color applied");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("green color applied");
        return changeColor("purple", 1000);
    })
    .then (()=>{
        console.log("purple color applied");
    })

    
// ham BINA CATCH LIKHE BHI KAAM CHALA 
// SKKTE HAI KYNKI COLOR CHANGE WALE ME ERROR KI 
// POSSOBOILTY BAHUT KAM HOTI HAI 
// API CALL ME JAHAN ERROR KI 
// POSSOBOILTY ZYADA HOTI HAI WAHAN CATCH KA USE KARNA
    
// .catch(() => {
    //     console.log("some error occured");
    // });



// color change hone ke baad  console me
// requestPromise enter kro status fullfilled aayega

// means durinng the 5 seconds delay the
//  promise is in pending state matlab
// bata nhi sakte ki fullfilled hogan ki reject
