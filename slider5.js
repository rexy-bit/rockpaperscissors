const right = document.querySelector(".angle-right");
const left = document.querySelector(".angle-left");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let slideNumber = 1;
const length = images.length;

const bottom = document.querySelector(".bottom");



for(let i = 0;i<length;i++){
    const div = document.createElement("div");
    div.className = "round";
    bottom.appendChild(div);
    
}

const buttons = document.querySelectorAll(".round");

buttons[0].style.backgroundColor = "black";

function resetBg(){
    buttons.forEach((round) =>{
        round.style.backgroundColor = "transparent";
    });
}

buttons.forEach((round, i) =>{
    round.addEventListener("click", ()=>{
      removeBg();
        slider.style.transform = `translate(-${i*700}px)`;
        round.style.backgroundColor = "black";
        slideNumber = i+1;
        
    });
});


function nextSlide(){
    slider.style.transform = `translateX(-${slideNumber*700}px)`;
    slideNumber++;
}

function previousSlide(){
    slider.style.transform = `translateX(-${(slideNumber - 2)*700}px)`;
    slideNumber--;
}

function getFirstSlide(){
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

function getLastSlide(){
    slider.style.transform = `translateX(-${(length - 1)*700}px)`;
    slideNumber = length;
}



right.addEventListener("click", ()=>{
    if(slideNumber < length){
        nextSlide();
    }else{
        getFirstSlide();
    }
    resetBg();
    buttons[slideNumber - 1].style.backgroundColor = "black";
});

left.addEventListener("click", ()=>{
    if(slideNumber > 1){
        previousSlide();
    }else{
        getLastSlide();
    }
    resetBg();
    buttons[slideNumber - 1].style.backgroundColor = "black";
});



