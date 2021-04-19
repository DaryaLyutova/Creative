const menuButton = document.querySelector('.header__button');
const menu = document.querySelector('.navigation');
const linksSubtitle = ["", "Личный кабинет", "Корзина"];
const profile = document.querySelector('.header__subtitle');
const like = document.querySelector('.header__like-subtitle');
const checkboxMain = document.querySelector('.form__checkbox_all');
const checkboxCat = document.querySelector('.form__checkbox_cat');
const checkboxDog = document.querySelector('.form__checkbox_dog');
const checkboxFish = document.querySelector('.form__checkbox_fish');
const checkboxOther = document.querySelector('.form__checkbox_other');
const checkboxAll = document.querySelectorAll('.form__checkbox');
const cardAll = document.querySelectorAll('.pets__item');
const cardCat = document.querySelector('.pets__item_cat');
const cardDog = document.querySelector('.pets__item_dog');
const cardFish = document.querySelector('.pets__item_fish');
const cardOther = document.querySelector('.pets__item_other');

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

function handlerChecked(item) {
    item.classList.toggle('pets__item_visible');
    if (checkboxCat.checked && checkboxDog.checked && checkboxFish.checked && checkboxOther.checked) {
        checkboxMain.checked = true;
    } else {
        checkboxMain.checked = false;
    }
};

function handlerCheckedAll() {
    if (!checkboxMain.checked) {
        cardAll.forEach(item => item.classList.add('pets__item_visible'));
        checkboxAll.forEach(item => item.checked = false);
    } else {
        cardAll.forEach(item => item.classList.remove('pets__item_visible'));
        checkboxAll.forEach(item => item.checked = true);
    };
};

checkboxCat.addEventListener('change', () => { handlerChecked(cardCat) });
checkboxDog.addEventListener('change', () => { handlerChecked(cardDog) });
checkboxFish.addEventListener('change', () => { handlerChecked(cardFish) });
checkboxOther.addEventListener('change', () => { handlerChecked(cardOther) });
checkboxMain.addEventListener('change', () => { handlerCheckedAll() });