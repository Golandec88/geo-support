$(document).ready(() => {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1
    })
    if($(documemt).width() > 768) {
        new WOW().init();
    }
})