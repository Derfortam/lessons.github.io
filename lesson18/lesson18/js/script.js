const icon = document.querySelector('.menu__burger');
icon.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');
});