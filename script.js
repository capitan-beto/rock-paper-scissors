let userInput = "";
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let matchWinner = "";
let computerChoice = "";

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
        if (choice === 0){
            computerChoice =  "rock";
        } else if (choice === 1){
            computerChoice =  "scissors";
        } else if (choice === 2){
            computerChoice =  "paper";
        }}

function playRound(userInput){
    if(userInput === computerChoice){
        roundWinner  = "Tie";
    } else if(userInput === "rock" && computerChoice === "paper" 
        || userInput === "paper" && computerChoice === "scissors" 
        || userInput === "scissors" && computerChoice === "rock"){
            computerScore++;
            roundWinner =  "Computer has won";
    } else if(userInput === "rock" && computerChoice === "scissors"
        || userInput === "paper" && computerChoice === "rock"
        || userInput === "scissors" && computerChoice === "paper"){
            playerScore++;
            roundWinner = "Player has won";
    } else{
        return ("check your spell");
    }
}

function winner(playerScore, computerScore){
    if (playerScore === 5){
        result.textContent = "Good job boi! You win.";
        paraPlayer.textContent = `Player score: ${playerScore}`;
        paraComputer.textContent = `Computer score: ${computerScore}`;
        playAgain(paraPlayer, paraComputer);
    } else if (computerScore === 5){
        result.textContent = "Dumb-o! You loose."; 
        paraPlayer.textContent = `Player score: ${playerScore}`;
        paraComputer.textContent = `Computer score: ${computerScore}`;
        playAgain(paraPlayer, paraComputer);
    }}

function playAgain(){
    btns.style.display = "none";
    const newMatchBtn = document.createElement("button");
    newMatchBtn.classList.add("play-again")
    newMatchBtn.textContent = "Play again?";
    newMatchBtn.addEventListener("click", () => {
        window.location.reload();
    },{once: true});
    container.appendChild(newMatchBtn);
}


const btns = document.querySelector("#btns");
btns.setAttribute("style", "background: salmon; border: solid 2px red"); 

const paperBtn = document.createElement("button");
paperBtn.classList.add("paper");
paperBtn.textContent = "🖐🏽";

const rockBtn = document.createElement("button");
rockBtn.classList.add("rock");
rockBtn.textContent = "✊🏿";

const scissorsBtn = document.createElement("button");
scissorsBtn.classList.add("scissors");
scissorsBtn.textContent = "✌🏻";

btns.appendChild(paperBtn);
btns.appendChild(rockBtn);
btns.appendChild(scissorsBtn);

//Match score DOM elements.

const container = document.querySelector("#container");
container.setAttribute("style", "background: lightblue; border: solid 2px blue;") //don't forget to change this.

const scoreDiv = document.createElement("div");
scoreDiv.setAttribute("id", "score");
container.appendChild(scoreDiv);

const paraPlayer = document.createElement("p");
paraPlayer.classList.add("player-score");
paraPlayer.textContent = `Player score: ${playerScore}`;
scoreDiv.appendChild(paraPlayer);

const paraComputer = document.createElement("p");
paraComputer.classList.add("computer-score");
paraComputer.textContent = `Computer score: ${computerScore}`;
scoreDiv.appendChild(paraComputer);

const result = document.createElement("p");
result.classList.add("match-winner");
scoreDiv.appendChild(result);

const match = document.querySelectorAll("button");
match.forEach((button) => {
    button.addEventListener("click", () => {
        userInput = button.className;
        getComputerChoice();
        playRound(userInput);
        paraRound.textContent = `${roundWinner}`;
        setTimeout(() => (paraRound.textContent = ""), 500)
        paraPlayer.textContent = `Player score: ${playerScore}`;
        paraComputer.textContent = `Computer score: ${computerScore}`;
        winner(playerScore, computerScore);
    })
});

const paraRound = document.createElement("p");
paraRound.classList.add("round-result");
paraRound.textContent = "";
btns.appendChild(paraRound);










