function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch (choice){
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}

function playRound(userChoice, computerSelection){
    if(userChoice === computerSelection){
        return "Tie";
    } else if(userChoice === "rock" && computerSelection === "paper" 
        || userChoice === "paper" && computerSelection === "scissors" 
        || userChoice === "scissors" && computerSelection === "paper"){
            computerScore++;
            return "Computer has won";
    } else if(userChoice === "rock" && computerSelection === "scissors"
        || userChoice === "paper" && computerSelection === "rock"
        || userChoice === "scissors" && computerSelection === "paper"){
            playerScore++;
            return "Player has won";
    } else{
        alert("check your spell");
    }
}

let playerScore = 0;
let computerScore = 0;


for(let i = 0; i < 5; i++){
    const userInput = prompt("Type") || "";
    const userChoice = userInput.toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(userChoice, computerSelection));
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
}







