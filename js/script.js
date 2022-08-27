$(document).ready(function () {

    // 계좌번호 Toggle
    $(".title, .btn").click(function (e) {
        e.preventDefault();

        $("div.grooms_text").slideToggle();
        $(".btn").toggleClass("open");

        if ($(".btn").hasClass("open")) {
            $(".btn").find(">i").attr("class", "fa fa-angle-up");
        } else {
            $(".btn").find(">i").attr("class", "fa fa-angle-down");
        }
    });

});