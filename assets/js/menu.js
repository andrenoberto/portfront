;(() => {
    'use strict';

    const btn = document.querySelector('.header-nav__navbar');
    const html = document.querySelector('html');
    let menuOpened = false;

    btn.addEventListener('click', toggleMenu);

    function toggleMenu(e) {
        menuOpened ? closeMenu() : openMenu();
    }

    function closeMenu() {
        menuOpened = false;
        html.classList.remove('menu-opened');
    }

    function openMenu() {
        menuOpened = true;
        html.classList.add('menu-opened');
    }
})();
