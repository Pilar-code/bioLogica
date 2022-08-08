let slider = tns({
    container: ".my-slider",
    slideBy: 1,
    speed: 400,
    center: true,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    arrowKeys: true,
    controls: false,
    mouseDrag: true,
    gutter: 50,
    responsive: {
        150: {
            fixedWidth: 100
        },
        220: {
            fixedWidth: 170
        },
        270: {
            fixedWidth: 220
        },
        320: {
            fixedWidth: 270
        },
        375: {
            fixedWidth: 325
        },
        425: {
            fixedWidth: 375
        },
        550: {
            fixedWidth: 500
        }
    }
})