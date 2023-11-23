jQuery(document).ready(($) => {
    $('#slider').owlCarousel({
        items: 3,
        margin: 10,
        nav: true,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
})