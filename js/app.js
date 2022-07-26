$(document).ready(function () {
    $('.fa-bars').click(function () {
        $('header nav').addClass('mob-view')
    })

    $('.fa-times').click(function () {
        $('header nav').removeClass('mob-view')
    })
});