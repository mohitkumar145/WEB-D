


// const favMovie = "3 idots";
// let guess = prompt("Guess my favorite movie");

// while ((guess != favMovie) && (guess != "quit")) {
//   guess= prompt("wrong guess. Please try again");


// }
// if (guess == favMovie) {
//         console.log("Congrats! You guess the Movie");

//     }
//     else {
//         console.log("ohh! Bad luck try next time");
//     }




// using break;



const favMovie = "3 idots";
let guess = prompt("Guess my favorite movie");

while (guess != favMovie) {

    if (guess == "quit") {
        console.log("ohh! Bad luck try next time");
        break;
    }
    guess = prompt("wrong guess. Please try again");

}
if (guess == favMovie) {
    console.log("Congrats! You guess the Movie");
}