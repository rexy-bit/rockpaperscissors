
let score = JSON.parse(localStorage.getItem('score')) || {
    Wins : 0,
    Losses : 0,
    Ties : 0
};

displayScore();
function pickComputerMove(){

    let computerMove = '';
    let randomNumber = Math.random();

    if(randomNumber <=1/3){
        computerMove = 'rock';
    }else if(randomNumber > 1/3 && randomNumber <= 2/3){
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
        result = 'Tie';
       }else if(computerMove === 'paper'){
        result = 'Lose';
       }else if(computerMove === 'scissors'){
        result = 'Win';
       }

    }else if(playerMove  === 'paper'){

        if(computerMove === 'rock'){
            result = 'Win';
           }else if(computerMove === 'paper'){
            result = 'Tie';
           }else if(computerMove === 'scissors'){
            result = 'Lose';
           }

    }else if(playerMove === 'scissors'){

        if(computerMove === 'rock'){
            result = 'Lose';
           }else if(computerMove === 'paper'){
            result = 'Win';
           }else if(computerMove === 'scissors'){
            result = 'Tie';
           }

    }

    if(result === 'Win'){
        score.Wins++;
    }else if(result === 'Lose'){
        score.Losses++;
    }else if(result === 'Tie'){
        score.Ties++;

    }
    
    document.querySelector('.display-result').innerHTML = `${result}`;
    document.querySelector('.display-moves').innerHTML = `You picked  <img src="emojis/${playerMove}-emoji.png" class="emoji">, computer picked  <img src="emojis/${computerMove}-emoji.png" class="emoji">`;
    displayScore();
    saveScore();


}

let isAutoPlaying = false;
let intervalId;
function autoPlay(){

    if(!isAutoPlaying){
        intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
             playGame(playerMove);
        },1000); 
        isAutoPlaying = true;
    }else {
        clearInterval(intervalId);
        isAutoPlaying = false;
        
    }
   
}

function displayScore(){
    document.querySelector('.display-score').innerHTML = `Wins : ${score.Wins}, Losses : ${score.Losses}, Ties : ${score.Ties}`;

}

function saveScore(){
    localStorage.setItem('score', JSON.stringify(score));
}

function resetScore(){
     score.Wins = 0;
     score.Losses = 0;
     score.Ties = 0;
     saveScore();
     displayScore();
}