const icon = document.querySelector('.header__hide-button');
icon.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');
});