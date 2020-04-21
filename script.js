let nav = document.querySelector(".main-nav");
let logos = document.querySelectorAll(".logo");
let slides = document.querySelectorAll(".quotes__slide")
let points = document.querySelectorAll(".quotes__points div")

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