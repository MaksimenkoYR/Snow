let nav = document.querySelector(".main-nav");
let logos = document.querySelectorAll(".logo");
let slides = document.querySelectorAll(".quotes__slide");
let points = document.querySelectorAll(".quotes__points div");
let allPoints = document.querySelector(".quotes__points");
let sliderButtons = document.querySelectorAll(".slider__button");

window.addEventListener("scroll", function() {
    if(window.pageYOffset >= 33){
        nav.classList.add("main-nav--sticked");
        logos[0].classList.add("logo--disable");
        logos[1].classList.remove("logo--disable");
    } else {
        nav.classList.remove("main-nav--sticked");
        logos[1].classList.add("logo--disable");
        logos[0].classList.remove("logo--disable");
    }
});

let a = 0;

function disableSlides (){
    for(let i = 0; i < slides.length; i++ ){
        slides[i].classList.remove("active");
        points[i].classList.remove("active");
    }
}

function activateSlide (n){
    slides[n].classList.add("active");
    points[n].classList.add("active");
}

function slideChange (){
    if (a < 0){
        a = slides.length - 1;
    } else if (a >= slides.length) {
        a = 0;
    }
    disableSlides();
    activateSlide(a);
};

setTimeout( function autoChange (){
    slideChange()
    a++
    setTimeout(autoChange, 5000)
}, 5000);

setInterval(slideChange, 4000);

sliderButtons[0].addEventListener("click", () =>{
    a--;
    slideChange();
});

sliderButtons[1].addEventListener("click", () => {
    a++;
    slideChange();
});

allPoints.addEventListener("click", event =>{
    for(let i = 0; i < points.length; i++){
        if(event.target == points[i]){
            a = i;
            slideChange();
        }
    }
});

let anchors = document.querySelectorAll("a[href^='#']");

anchors.forEach(item =>{
    item.addEventListener("click", function(e){
        e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
    });
    });
});