;(() => {
    'use strict';

    const btn = document.querySelector('.header-nav__navbar');
    const html = document.querySelector('html');
    const menu = document.getElementById('main-menu');
    const openedMenuClass = 'menu-opened';
    let menuOpened = false;

    btn.addEventListener('click', toggleMenu);
    html.addEventListener('click', (e) => {
        if (e.target === html && menuOpened) {
            toggleMenu();
        }
    });
    html.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' && menuOpened) {
            toggleMenu();
        }
    });

    function toggleMenu() {
        menuOpened ? closeMenu() : openMenu();
        btn.setAttribute('aria-expanded', menuOpened.toString());
        menu.setAttribute('aria-expanded', menuOpened.toString());
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
