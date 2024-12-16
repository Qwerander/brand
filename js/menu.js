const burger = document.querySelector('.js-burger');
const menu = document.querySelector('.js-menu');
const header = document.querySelector('.js-header');

burger.addEventListener('click', ()=>{
    menu.classList.toggle('header__menu--active');
    header.classList.toggle('header--active');
})