let left = document.querySelector('.angle-left');
let right = document.querySelector('.angle-right');
let slider = document.querySelector('.slider');

let images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let slideNumber = 1;

const length = images.length;

for(let i = 0;i<length ; i++){
    const div = document.createElement("div");
    div.className = "round";
    bottom.appendChild(div);

}

const buttons = document.querySelectorAll(".round");

buttons[0].style.backgroundColor  ="white";

function resetBg(){
    buttons.forEach((round) =>{
        round.style.backgroundColor = "transparent";
    });
}

buttons.forEach((round, i)=>{
    round.addEventListener('click', ()=>{
        resetBg();
        slider.style.transform = `translateX(-${i*800}px)`;
        slideNumber = i+1;
        round.style.backgroundColor = "white";
    });
});


function nextSlide(){

    slider.style.transform = `translateX(-${slideNumber*800}px)`;
    slideNumber++;
}

function getFirstSlide(){
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

function getPrevSlide(){
    slider.style.transform = `translateX(${-(slideNumber-2)*800}px)`;
    slideNumber--;
}

function getLastSlide(){
    slider.style.transform =`translateX(-${(length-1)*800}px)`;
    slideNumber = length;
}

right.addEventListener('click', function(){
    if(slideNumber < length){
           nextSlide();

    }else{
          
        getFirstSlide();
    }
    resetBg();
    buttons[slideNumber - 1].style.backgroundColor = "white";

});

left.addEventListener('click', () =>{
     if(slideNumber > 1){
        getPrevSlide();
     }else{
        getLastSlide();
     }
     resetBg();
     buttons[slideNumber - 1].style.backgroundColor = "white";
});

