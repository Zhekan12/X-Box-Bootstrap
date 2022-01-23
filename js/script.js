$('.slide_1').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    nav:true,
    navText: [ '', ' ' ],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.slide_2').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    nav:true,
    navText: [ '', ' ' ],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3.7
        }
    }
})