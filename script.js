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

function playRound(userInput, computerSelection){
    if(userInput === computerSelection){
        roundWinner  = "Tie";
    } else if(userInput === "rock" && computerSelection === "paper" 
        || userInput === "paper" && computerSelection === "scissors" 
        || userInput === "scissors" && computerSelection === "rock"){
            computerScore++;
            roundWinner =  "Computer has won";
    } else if(userInput === "rock" && computerSelection === "scissors"
        || userInput === "paper" && computerSelection === "rock"
        || userInput === "scissors" && computerSelection === "paper"){
            playerScore++;
            roundWinner = "Player has won";
    } else{
        return ("check your spell");
    }
}

function winner(playerScore, computerScore){
    if (playerScore === 5){
        result.textContent = ("Good job boi! You win.");
    } else if (computerScore === 5){
        result.textContent = "Dumb-o! You loose.";
    } else {
        result.textContent = "";
    }}


let userInput = "";
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let matchWinner = "";



const btns = document.querySelector("#btns")
btns.setAttribute("style", "background: salmon; border: solid 2px red");

const paperBtn = document.createElement("button");
paperBtn.classList.add("paper");
paperBtn.textContent = "🖐🏽";
paperBtn.addEventListener("click", (e) => {userInput = "paper"});

const rockBtn = document.createElement("button");
rockBtn.classList.add("rock");
rockBtn.textContent = "✊🏿";
rockBtn.addEventListener("click", (e) => {userInput = "rock"});

const scissorsBtn = document.createElement("button");
scissorsBtn.classList.add("scissors");
scissorsBtn.textContent = "✌🏻";
scissorsBtn.addEventListener("click", (e) => {userInput = "scissors"});

btns.appendChild(paperBtn);
btns.appendChild(rockBtn);
btns.appendChild(scissorsBtn);



//Match score DOM elements.

const container = document.querySelector("#container");
container.setAttribute("style", "background: lightblue; border: solid 2px blue;")

const scoreDiv = document.createElement("div");
scoreDiv.setAttribute("id", "score");
container.appendChild(scoreDiv);

const paraPlayer = document.createElement("p");
paraPlayer.classList.add("player-score");
paraPlayer.textContent = `Player score: ${playerScore}`;

const paraComputer = document.createElement("p");
paraComputer.classList.add("computer-score");
paraComputer.textContent = `Computer score: ${computerScore}`;

scoreDiv.appendChild(paraPlayer);
scoreDiv.appendChild(paraComputer);

const result = document.createElement("p");
result.classList.add("match-winner");

scoreDiv.appendChild(result);

const match = document.querySelectorAll("button");
match.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(userInput, computerSelection);
        paraRound.textContent = `${roundWinner}`;
        paraPlayer.textContent = `Player score: ${playerScore}`;
        paraComputer.textContent = `Computer score: ${computerScore}`;
        winner(playerScore, computerScore);
    })
});

const paraRound = document.createElement("p");
paraRound.classList.add("round-result");
paraRound.textContent = "Round winner: ";
btns.appendChild(paraRound);





