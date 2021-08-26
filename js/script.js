//SubMenu--opacity

const subMenu = document.querySelector(".subMenu");
const categorias = document.querySelector(".categorias");
console.log(categorias)
categorias.addEventListener("mouseover", () => {
    subMenu.classList.add('active');
});

categorias.addEventListener("mouseout", () => {
    subMenu.classList.remove('active');
});



//javascript for navigation bar effect on scroll
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menuBtn');
var closeBtn = document.querySelector('.closeBtn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});


//-----------------------Codigo Slider--------------------

const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slideIcon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//Autoplay Imagenes
var playSlider;

var repeater = () => {
    playSlider = setInterval(function () {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber++;

        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 8000);
}
repeater();


slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
    repeater();
});

