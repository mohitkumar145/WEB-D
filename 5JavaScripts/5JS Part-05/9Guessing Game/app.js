const max = prompt("Enetr a max numbrer : ");

let random = Math.floor(Math.random() * max) + 1
let guess = prompt("Enter Your guessed Numbers");
console.log(random);

while //(guess != random && guess != "quit")
    (true) {
    if (guess == "quit") {
        console.log(" Ohh Better luck next itme");
        break;

    }
    if (guess == random) {
        console.log("Congrats ! the random number was :", random);
        break;
    }

     else if (guess < random) {
        guess = prompt("Your number is too small please! try again later");
    }

    else if(guess > random) {
        guess = prompt("Your number is too big please! try again later");

    }

    // else {
    //     guess = prompt("you guess was wrong numbers please try again:");
    // }
}






