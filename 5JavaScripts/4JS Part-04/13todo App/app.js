
// let todo = [];
// let req = prompt("Please! enter your request");

// while (true) {
//     if (req == "quit") {
//         console.log("quiting app");
//         break;

//     }
//     if (req == "list") {
//         console.log("______________");
//         for (task of todo) {
//             console.log(task);
//         }
//         console.log("______________");
//     }
//     else if (req == "add") {
//         let task = prompt("Please! enter your task you want do add ");
//         todo.push(task);
//         console.log("task added");

//     }

//         req = prompt("please enter your request");


// }




//Now add delete fn



let todo = [];
let req = prompt("Please! enter your request");

while (true) {
    if (req == "quit") {
        console.log("quiting app");
        break;

    }
    if (req == "list") {
        console.log("______________");
        for (let i =0; i< todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("______________");
    }
    else if (req == "add") {
        let task = prompt("Please! enter your task you want do add ");
        todo.push(task);
        console.log("task added");
       

    }

     else if(req == "delete"){

let index = prompt("please enter the task index") 
  todo.splice(index, 1);
  console.log("task deleted");

     }
     else{

        console.log("you enetered wrong request.")
     }

        req = prompt("please enter your request");

}
