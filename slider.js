const left = document.querySelector('.angle-left');
const right = document.querySelector('.angle-right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');


let slideNumber = 1;

length = images.length;

function nextSlide(){
    slider.style.transform = `translateX(-${slideNumber*600}px)`;
    slideNumber++;
};

function getFirstSlide(){
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

function getPrevSlide(){
     slider.style.transform = `translateX(-${(length - 2)*600}px)`;
     slideNumber--;
};


function getLastSlide(){
    slider.style.transform=`translateX(-${(length - 1)*600}px)`;
    slideNumber = length;
}

left.addEventListener('click', function(){
   
    if(slideNumber > 1){
        getPrevSlide();
    }else{
        getLastSlide();
        
    }

});


right.addEventListener('click', function(){
    if(slideNumber < length){
        nextSlide();
    }else{
        getFirstSlide();
    }
    
});