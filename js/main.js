/**
 * Created by Minh Duc on 4/21/2017.
 */
jQuery(function ($) {
 new WOW().init();

    $('.carousel').carousel({
        interval: 2000
    });

    // Click button Register ScrollTop & Focus to Register Form
    function scrollToTop() {
        $('html, body').animate({ scrollTop: 108 }, 700);
    }
    $('.registerclick').click(function() {
        scrollToTop();
        $("#txtName").focus();
    });



});

