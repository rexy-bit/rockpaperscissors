

let score = JSON.parse(localStorage.getItem('score') )|| {
    Wins : 0,
    Losses : 0
};
function flipCoin(guess){

    let result = '';
    let computerMove = pickComputerMove();

    if(guess === computerMove){
        score.Wins++;
        result = 'You win !';
    }else{
        score.Losses++;
        result = 'You lose !'
    }

    localStorage.setItem('score', JSON.stringify(score));
   
     alert(`The computer chose ${computerMove}, You\'re guess was ${guess}, So ${result}\nThe score : Wins : ${score.Wins} | Losses : ${score.Losses}`);



    
}

function pickComputerMove(){
    let randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber < 0.5){
        computerMove = 'Heads';
    }else{
   computerMove = 'Tails';
    }

    return computerMove;
}