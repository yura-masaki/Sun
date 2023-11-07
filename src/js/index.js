$(".l-question__wrapper__list__anser").hide();
$(".l-question__wrapper__list").on("click", function (e) {
    $('.l-question__wrapper__list__anser', this).slideToggle('fast');
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
    } else {
        $(this).addClass('open');
    }
});

$(function () {
    // ハンバーガーボタンクリックで実行
    $(".l-drawer__button").click(function () {
        $(this).toggleClass("active");
        $(".l-drawer__nav").toggleClass("active");
    });

    $(".l-drawer__nav__link").click(function () {
        $(".l-drawer__button").removeClass("active");
        $(".l-drawer__nav").removeClass("active");
    });

});