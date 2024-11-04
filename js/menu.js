const burger = document.querySelector('.js-burger');
const menu = document.querySelector('.js-menu');

burger.addEventListener('click', ()=>{
    menu.classList.toggle('header__menu--active');
})