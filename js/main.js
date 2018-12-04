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


//validacion de formulario

function validar(){

    var nombre,correo,mensaje;
    nombre=document.getElementById("name").value;
email=document.getElementById("email").value;
    mensaje=document.getElementById("mensaje").value;

    if(nombre === "")
{
   alert("El campo del nombre esta vacío");
    document.getElementById("name").focus();
    return false;
    }else if(email=== ""){
     alert("El campo del correo esta vacío");
     document.getElementById("email").focus();
    return false;
                }else if(mensaje=== ""){
     alert("El campo del mensaje esta vacío");
     document.getElementById("mensaje").focus();
    return false;
                }
}
//fin fomrulario

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
        margin: 20
      }
    }
  })
})
