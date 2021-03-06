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

    var slideImages = new Array();
    var whichimage = 0;

    slideImages[0] = new Image();
    slideImages[0].src = "img/pizza1.jpg";
    slideImages[1] = new Image();
    slideImages[1].src = "img/pizza2.jpg";
    slideImages[2] = new Image();
    slideImages[2].src = "img/pizza3.jpg";

    //variable that will increment through the images
    var step = 0;

var x; //= document.getElementsByTagName("img").item(0);
var v; //= x.getAttribute("src");

    function slideit() {

        x = document.getElementsByTagName("img").item(0);
        v = x.getAttribute("src");

        if(!document.images)
            return;

        v = slideImages[step].src;

        document.getElementById('slide').src = slideImages[step].src;

        whichimage = step;

        if (step<2) {
            step++;
        }
        else {
            step = 0;
        }
        x.setAttribute("src", v);

        setTimeout("slideit()",2500);
    }

    function slidelink() {
        if(whichimage == 0) {
            window.location = "http://minimalistbaker.com/my-favorite-vegan-pizza/";
        }
        else if(whichimage == 1) {
            window.location = "http://minimalistbaker.com/my-favorite-vegan-pizza/";
        }
        else if(whichimage == 3) {
            window.location = "http://minimalistbaker.com/my-favorite-vegan-pizza/";
        }

    }
    slideit();




