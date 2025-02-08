
let score = JSON.parse(localStorage.getItem("score")) ||{
    Wins : 0,
    Losses : 0,
    Ties : 0
};

const rockElement = document.querySelector(".rock");
const paperElement = document.querySelector(".paper");
const scissorsElement = document.querySelector(".scissors");

const reset = document.querySelector(".reset-button");
const showScore = document.querySelector(".show-score-button");
const auto = document.querySelector(".auto-play-button");

let isAutoplaying = false;
let intervalId;
auto.addEventListener("click", ()=>{
   

    autoplay();
});

rockElement.addEventListener("click", ()=>{
    playGame("rock");
});

paperElement.addEventListener("click", ()=>{
    playGame("paper");
});

scissorsElement.addEventListener("click", ()=>{
    playGame("scissors");
});

reset.addEventListener("click", ()=>{
    resetScore();
});

showScore.addEventListener("click", ()=>{
    updateScore();
});





function pickComputermove(){

    let computerMove = "";
    let randomNumber = Math.random();

    if(randomNumber <= 1/3){
        computerMove = "rock";
    }else if(randomNumber > 1/3 && randomNumber <=2/3){
        computerMove = "paper";
    }else{
        computerMove = "scissors";
    }

    return computerMove;

}

function playGame(playerMove){
    let computerMove = pickComputermove();
    let result = "";

     if(playerMove === "rock"){

        if(computerMove === "rock"){
            result = "Tie";
        }else if(computerMove === "paper"){
            result = "Lose";
        }else if(computerMove === "scissors"){
            result = "Win";
        }

     }else if(playerMove === "paper"){

        if(computerMove === "rock"){
            result = "Win";
        }else if(computerMove === "paper"){
            result = "Tie";
        }else if(computerMove === "scissors"){
            result = "Lose";
        }

     }else if(playerMove === "scissors"){

        if(computerMove === "rock"){
            result = "Lose";
        }else if(computerMove === "paper"){
            result = "Win";
        }else if(computerMove === "scissors"){
            result = "Tie";
        }

     }

     if(result === "Win"){
      score.Wins++;
     }else if(result === "Tie"){
        score.Ties++;
     }else if(result === "Lose"){
        score.Losses++;
     }

     document.querySelector(".display-result").innerHTML = `${result}`;
     document.querySelector(".display-moves").innerHTML = `You picked ${playerMove}, computer picked ${computerMove}`;
     updateScore();
     saveScore();



}

function updateScore(){
    document.querySelector(".display-score").innerHTML = `Wins : ${score.Wins}, Losses : ${score.Losses}, Ties : ${score.Ties} `;
}




function saveScore(){
    localStorage.setItem("score", JSON.stringify(score));
}

function resetScore(){
    score = {
        Wins : 0,
        Losses : 0,
        Ties : 0
    };
    saveScore();
    updateScore();

}




function autoplay(){

    if(!isAutoplaying){
        intervalId = setInterval(()=>{
            const playerMove = pickComputermove();
            playGame(playerMove);
            isAutoplaying = true;
        }, 1000);
    }else{
        clearInterval(intervalId);
        isAutoplaying = false;
    }
    

}
