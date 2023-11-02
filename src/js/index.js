$(".l-question__wrapper__list__anser").hide();
$(".l-question__wrapper__list").on("click", function (e) {
    $('.l-question__wrapper__list__anser', this).slideToggle('fast');
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
    } else {
        $(this).addClass('open');
    }
});

//ハンバーガーメニュー
function toggleNav() {
    const body = document.body;
    const hamburger = document.getElementById("js_hamburger");
    const overlay = document.getElementById("js_overlay");
    hamburger.addEventListener("click", function () {
        body.classList.toggle("nav_open"); //クラスが含まれていれば削除、含まれていなければ追加する
    });
    overlay.addEventListener("click", function () {
        body.classList.remove("nav_open"); //クラスを削除する
    });
}
toggleNav();