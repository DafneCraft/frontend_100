console.log("Hello!")

let computerScore = 0;
let humanScore = 0;

const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissor_button = document.getElementById("scissor");
const reset_button = document.getElementById('reset');
const mode5_button = document.getElementById('mode5');

const score_blank = document.getElementById('result');
const scoreIa = document.getElementById('score-ia')
const scoreHuman = document.getElementById('score-human')

rock_button.addEventListener('click', () => { displayResult(0); });
paper_button.addEventListener('click', () => { displayResult(1); });
scissor_button.addEventListener('click', () => { displayResult(2); });
reset_button.addEventListener('click', resetOption);
mode5_button.addEventListener('click', thanks);


function thanks() {
  alert ("Thanks for Playing!😁, I'm practicing this😅. And thanks to you my wonderful company, you inspire me to do things for you. 🖤💎 | 💜🌹");
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function comparativeResult(option1, option2) {
  
  if (option1 == option2) {
    score_blank.innerHTML = "Tie";
  } else if (option1 == "paper" && option2 == "rock") {
    humanScore += 1;
    score_blank.innerHTML = "Human Win";
    scoreHuman.innerHTML = humanScore;
  } else if (option1 == "scissor" && option2 == "paper") {
    humanScore += 1;
    score_blank.innerHTML = "Human Win";
    scoreHuman.innerHTML = humanScore;
  } else if (option1 == "rock" && option2 == "scissor") {
    humanScore += 1;
    score_blank.innerHTML = "Human Win";
    scoreHuman.innerHTML = humanScore;
  } else {
    computerScore += 1;
    score_blank.innerHTML = "IA Win";
    scoreIa.innerHTML = computerScore;
  }
}

function displayResult(humanOption) {
  const option = ["rock", "paper", "scissor"];
  const iaOption = getRndInteger(0, 3);
  
  comparativeResult(option[humanOption], option[iaOption])

  console.log(option[iaOption]); 
  console.log(option[humanOption]);
}

function resetOption() {
  humanScore = 0;
  computerScore = 0;
  score_blank.innerHTML = "Info";
  scoreHuman.innerHTML = "0";
  scoreIa.innerHTML = "0";
}

