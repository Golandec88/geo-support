$(document).ready(() => {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1
    })
    new WOW().init();
})