console.log("ready");
$(document).ready(function () {
    $('.header__burger').click(function (even) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});