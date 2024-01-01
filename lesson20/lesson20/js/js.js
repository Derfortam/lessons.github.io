const icon = document.querySelector('.menu__burger');
icon.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');
});

const filter = document.querySelector('.filter__main-name');
filter.addEventListener('click', function () {
    document.documentElement.classList.toggle('filter-open');
});