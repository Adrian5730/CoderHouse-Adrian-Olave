//SubMenu--opacity

const subMenu = document.querySelector(".subMenu");
const categorias = document.querySelector(".categorias");
categorias.addEventListener("mouseover", () => {
    subMenu.classList.add('actives');
});

categorias.addEventListener("mouseout", () => {
    subMenu.classList.remove('actives');
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


