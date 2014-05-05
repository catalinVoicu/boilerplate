function navplay() {
    if ($(window).width() >= 767) {
        $('.nav-btn .menu-btn').removeClass('active');
        $('.main-nav .nav-menu').removeAttr('style');
    } else {
        $('.nav-btn .menu-btn').click(function () {
            $(this).toggleClass('active');
            $(this).parents('.main-nav').find('.nav-menu').toggle();
        });
    }
};

function bottomFooter() {
    var wh = $(window).height();
    var hh = $("#hdr-height").outerHeight(true);
    var fh = $("#ftr-height").outerHeight(true);
    $("#dnc-content").css("min-height", wh - (hh + fh) + 'px');
};

function footerPlay() {
    if ($(window).width() >= 767) {
        $('.ftr-item .ftr-head').removeClass('active');
        $('.footer .ftr-section').removeAttr('style');
    } else {
    $('.footer .ftr-item .ftr-head').click(function () {
        $(this).parent('.ftr-item').toggleClass('active');
        $(this).parent().find('.ftr-section').toggle("blind", 500);
    });
    }

};

$(document).ready(function () {
    navplay();
    bottomFooter();
    footerPlay();
});

$(window).resize(function () {
    navplay();
    bottomFooter();
    footerPlay();
    console.log("resize event");
});