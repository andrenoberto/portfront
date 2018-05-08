;(() => {
    'use strict';

    const btn = document.querySelector('.header-nav__navbar');
    const html = document.querySelector('html');
    const openedMenuClass = 'menu-opened';
    let menuOpened = false;

    btn.addEventListener('click', toggleMenu);
    html.addEventListener('click', (e) => {
        if (e.target === html && menuOpened) {
            closeMenu();
        }
    });

    function toggleMenu(e) {
        menuOpened ? closeMenu() : openMenu();
    }

    function closeMenu() {
        btn.blur();
        html.classList.remove(openedMenuClass);
        menuOpened = false;
    }

    function openMenu() {
        html.classList.add(openedMenuClass);
        menuOpened = true;
    }
})();
