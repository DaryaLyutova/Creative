// const menu = document.querySelector('.info__navigation');
const menuButton = document.querySelector('.header__button');
const menu = document.querySelector('.navigation');
// const closeButton = document.querySelector('.navigation__close')
const linksSubtitle = ["", "Личный кабинет", "Корзина"];
const money = document.querySelector('.profile__money');
const profile = document.querySelector('.header__subtitle');
const like = document.querySelector('.header__like-subtitle');

profile.textContent = linksSubtitle[1];
like.textContent = linksSubtitle[2];

setTimeout(function random() {
    if (window.screen.availWidth < 768) {
        profile.textContent = linksSubtitle[0];
        like.textContent = linksSubtitle[0];       
    } else { 
        profile.textContent = linksSubtitle[1];
        like.textContent = linksSubtitle[2];
    }
    setTimeout(random, 1000);
}, 1000);

menuButton.addEventListener('click', () => {
    menu.classList.toggle('navigation_visible');
});
