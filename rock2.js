

let score = JSON.parse(localStorage.getItem('score')) || {
  
    Wins : 0,
    Losses : 0,
    Ties : 0
   
};

function pickComputerMove(){
    let randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber <= 1/3){
        computerMove = 'rock';
    }else if(randomNumber > 1/3 && computerMove <= 2/3){
        computerMove = 'paper';
    }else if(randomNumber > 2/3){
        computerMove = 'scissors';
    }

    return computerMove;
}
function playGame(playerMove){
    let computerMove = pickComputerMove();
    let result = '';

   
    if(playerMove === 'rock'){

        if(computerMove === 'rock'){
            result = 'Tie.'
        }else if(computerMove === 'paper'){
            result = 'Lose.';
        }else if(computerMove === 'scissors'){
            result = 'Win.'
        }

    }else if(playerMove === 'paper'){

        if(computerMove === 'rock'){
            result = 'Win.'
        }else if(computerMove === 'paper'){
            result = 'Tie.';
        }else if(computerMove === 'scissors'){
            result = 'Lose.'
        }

    }else if(playerMove === 'scissors'){
        
        if(computerMove === 'rock'){
            result = 'Lose.'
        }else if(computerMove === 'paper'){
            result = 'Win.';
        }else if(computerMove === 'scissors'){
            result = 'Tie.'
        }

    }

    if(result === 'Win.'){
        score.Wins++;
    }else if(result === 'Lose.'){
        score.Losses++;
    }else if(result === 'Tie.'){
        score.Ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));;

     document.querySelector('.display-result').innerHTML = `${result}`;
     document.querySelector('.display-moves').innerHTML = `You : ${playerMove} -- Computer : ${computerMove}`;
    
     updateScore();

}

function updateScore(){

    document.querySelector('.display-score').innerHTML = `Wins : ${score.Wins}, Losses : ${score.Losses}, Ties : ${score.Ties}`;
}