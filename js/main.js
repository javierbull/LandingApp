window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Carousel
$('#blogCarousel').carousel({
      interval: 4000
  });

  $('#carouselContent').carousel({
        interval: 3500
    });
