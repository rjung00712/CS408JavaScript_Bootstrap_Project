// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});




    // var slideIndex = 1;
    // showSlides(slideIndex);
    //
    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }
    //
    // function currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }
    //
    // function showSlides(n) {
    //     var i;
    //     var slides = document.getElementsByClassName("mySlides");
    //     var dots = document.getElementsByClassName("dot");
    //
    //
    //     if (n > slides.length) {
    //         slideIndex = 1
    //     }
    //
    //     if (n < 1) {
    //         slideIndex = slides.length
    //     }
    //
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //
    //     slides[slideIndex-1].style.display = "block";
    //     dots[slideIndex-1].className += " active";

    // }


    var slideImages = new Array();
    slideImages[0] = new Image();
    slideImages[0].src = "img/pizza1.jpg";
    slideImages[1] = new Image();
    slideImages[1].src = "img/pizza2.jpg";
    slideImages[2] = new Image();
    slideImages[2].src = "img/pizza2.jpg";

    //variable that will increment through the images
    var step = 0;
    function slideit(){
        if(!document.images)
            return;
        document.getElementById('slide').src= slideImages[step].src;
        if (step<2)
            step++;
        else
            step=0;
        setTimeout("slideit()",2500);
    }
    slideit();




