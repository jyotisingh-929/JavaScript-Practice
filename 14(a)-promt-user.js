let gameNum = 25;
let userNum = prompt("Guess the Game Number:");
while(userNum != gameNum){
    userNum = prompt("You guess wrong number. Guess again:");
}
console.log("Congratulations! You guess right number.");