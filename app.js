let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was drawn");
  msg.innerText = 'Game draw, play again ';
  msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin , userChoice , comChoice) => {
  if(userWin){
    console.log('You Win!');
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! 😀  your ${userChoice} beat ${comChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    console.log('You lose');
    compScore++;
    compScorePara.innerText = compScore;

    msg.innerText = `You lose 😑 ${comChoice} beat your ${userChoice}`;
    msg.style.backgroundColor = "red";

  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);

  // Generate game choice
  const comChoice = genCompChoice();
  console.log("computer choice =", comChoice);

  if (userChoice === comChoice) {
    // Draw
    drawGame();
  } else {
    let userWin;

    if (userChoice === "rock") {
      userWin = comChoice === "scissor";
    } else if (userChoice === "paper") {
      userWin = comChoice === "rock";
    } else if (userChoice === "scissor") {
      userWin = comChoice === "paper";
    }

    showWinner(userWin , userChoice , comChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
