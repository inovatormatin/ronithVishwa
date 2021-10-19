$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1,
            dots: false
        },
        600:{
            dots: false,
            items:3
        },
        1000:{
            dots: false,
            items:3
        }
    }
})