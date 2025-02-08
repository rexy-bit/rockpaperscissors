let right = document.querySelector(".angle-right");
let left = document.querySelector(".angle-left");
const images = document.querySelectorAll(".image");

let slider = document.querySelector(".slider");
let bottom = document.querySelector(".bottom");

let slideNumber = 1;

let length = images.length;


function resetBg(){
    buttons.forEach((button)=>{
        button.style.backgroundColor = "transparent";
    });
}


for(let i = 0;i<length;i++){
    const div = document.createElement("div");
    div.className = "round";
    bottom.appendChild(div);

}

const buttons = document.querySelectorAll(".round");

buttons[0].style.backgroundColor = "white";

buttons.forEach((button, i)=>{
    button.addEventListener("click", ()=>{
          resetBg();
          slider.style.transform = `translateX(-${i*700}px)`;
        
        slideNumber = i+1;
        button.style.backgroundColor = "white";
        
    });
});


function nextSlide(){
    slider.style.transform = `translateX(-${slideNumber*700}px)`;
    slideNumber++;

}

function getFirstSlide(){
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

function getPrevSlide(){
    slider.style.transform = `translateX(-${(slideNumber - 2)*700}px)`;
    slideNumber--;
}

function getLastSlide(){
    slider.style.transform = `translateX(-${(length - 1)*700}px)`;
    slideNumber = length;
}



right.addEventListener("click", () => {
    if(slideNumber < length){
       nextSlide();
    }else{
         getFirstSlide();

    }
    resetBg();
    buttons[slideNumber - 1].style.backgroundColor = "white";
});

left.addEventListener("click" , ()=>{
    if(slideNumber > 1){
       getPrevSlide();
    }else{
        getLastSlide();
    }
    resetBg();
    buttons[slideNumber - 1].style.backgroundColor = "white";
});


