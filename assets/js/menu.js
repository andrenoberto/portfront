;(() => {
    'use strict';

    const btn = document.querySelector('.header-nav__navbar');
    const html = document.querySelector('html');
    const openedMenuClass = 'menu-opened';
    let menuOpened = false;

    btn.addEventListener('click', toggleMenu);

    function toggleMenu(e) {
        menuOpened ? closeMenu() : openMenu();
    }

    function closeMenu() {
        menuOpened = false;
        html.classList.remove(openedMenuClass);
    }

    function openMenu() {
        menuOpened = true;
        html.classList.add(openedMenuClass);
    }
})();
