
let score = JSON.parse(localStorage.getItem('score')) || {
    Wins : 0,
    Losses : 0
}

function playGame(guess){
   
    let computerMove = pickComputerMove();
    let result = '';

    if(computerMove === guess){
      result = 'You win !';
      score.Wins++;
    }else{
        result = 'You lose !';
        score.Losses++;
    }


     localStorage.setItem('score', JSON.stringify(score));
    alert(`Your guess was ${guess}, The result was ${computerMove}, So ${result}\nScore : Wins : ${score.Wins}, Losses : ${score.Losses}`);
   
}

function pickComputerMove(){

    let computerMove = '';
    let randomNumber = Math.random();

    if(randomNumber < 0.5){
    computerMove = 'Heads';
    }else{
        computerMove = 'Tails';
    }


    return computerMove;
}