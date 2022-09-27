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
        roundWinner  = "Tie";
    } else if(userChoice === "rock" && computerSelection === "paper" 
        || userChoice === "paper" && computerSelection === "scissors" 
        || userChoice === "scissors" && computerSelection === "paper"){
            computerScore++;
            roundWinner =  "Computer has won";
    } else if(userChoice === "rock" && computerSelection === "scissors"
        || userChoice === "paper" && computerSelection === "rock"
        || userChoice === "scissors" && computerSelection === "paper"){
            playerScore++;
            roundWinner = "Player has won";
    } else{
        return ("check your spell");
    }
}



let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let winner = (playerScore, computerScore) =>{
    if(computerScore > playerScore){
        return ("HA! you lost dummy!");
    } else if (computerScore < playerScore){
        return ("Good job pal! you won");
    } else{
        return ("That was a good match! But it's a tie.")
    }
}



for(let i = 0; i < 5; i++){
    const userInput = prompt("Type") || "";
    const userChoice = userInput.toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(userChoice, computerSelection);
    console.log(roundWinner);
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
    if (i === 4){
        console.log(winner(playerScore, computerScore));
    }
}



//DOM elements.

const container = document.querySelector("#container");
container.setAttribute("style", "background: lightblue; border: solid 2px blue;")


const scoreDiv = document.createElement("div");
scoreDiv.setAttribute("id", "score");
container.appendChild(scoreDiv);

const paraRound = document.createElement("p");
paraRound.classList.add("round-result");
paraRound.textContent = roundWinner;

const paraPlayer = document.createElement("p");
paraPlayer.classList.add("player-score");
paraPlayer.textContent = `Player score: ${playerScore}`;

const paraComputer = document.createElement("p");
paraComputer.classList.add("computer-score");
paraComputer.textContent = `Computer score: ${computerScore}`;

scoreDiv.appendChild(paraRound);
scoreDiv.appendChild(paraPlayer);
scoreDiv.appendChild(paraComputer);

const result = document.createElement("p");
result.classList.add("match-winner");
result.textContent = winner(playerScore, computerScore);

scoreDiv.appendChild(result);





