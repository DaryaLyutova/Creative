const menuButton = document.querySelector('.header__button');
const menu = document.querySelector('.navigation');
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
    };

    if (window.screen.availWidth < 1200) {
        menu.classList.add('navigation_visible');
    } else { 
        menu.classList.remove('navigation_visible');
    };
    // setTimeout(random, 1000);
}, 1000);

menuButton.addEventListener('click', () => {
    menu.classList.toggle('navigation_visible');
});
