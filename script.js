let userScore = 0;
let compScore = 0;

let userPara = document.querySelector("#user-score");
let compPara = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "cadetblue";
    msg.style.color = "white";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userPara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats the ${compChoice}`
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compPara.innerText = compScore;
        msg.innerText = `You lose! Computer's ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
};


const playgame = (userChoice) => {
    const compChoice = gencompChoice();
    if (userChoice === compChoice) {
        //draw match
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock scisors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "paper" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});


const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

