let right = document.querySelector('.angle-right');
let left = document.querySelector('.angle-left');
let slider = document.querySelector('.slider');


let images = document.querySelectorAll('.image');

let slideNumber = 1;
let length = images.length;

const bottom = document.querySelector('.bottom');

for(let i = 0;i<length;i++){
    const div = document.createElement("div");
    div.className = "round";
    bottom.appendChild(div);
    
}

const buttons = document.querySelectorAll(".round");

buttons[0].style.backgroundColor = "white";

buttons.forEach((round, i) => {
    round.addEventListener("click", () => {
       
        buttons.forEach((round) => {
            round.style.backgroundColor = "transparent";
        });
        slider.style.transform = `translateX(-${i*800}px)`;
        slideNumber = i+1;
        round.style.backgroundColor = "white";


    });
});



function nextSlide(){
    slider.style.transform = `translateX(-${slideNumber*800}px)`;
    slideNumber++;
}

function previousSlide(){
   slider.style.transform = `translateX(-${(slideNumber-2)*800}px)`;
   slideNumber--;
}

function getFirstSlide(){
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}


function getLastSlide(){
    slider.style.transform = `translateX(-${(length - 1)*800}px)`;
    slideNumber = length;
}
right.addEventListener('click', () => {
       if(slideNumber < length){
            nextSlide();
       }else{
        getFirstSlide();
       }

       
    });

left.addEventListener("click", ()=>{
    if(slideNumber > 1){
        previousSlide();
    }else{
        getLastSlide();

    }
});




