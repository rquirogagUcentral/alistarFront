document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instance = M.Carousel.init({
    fullWidth: true
  });
});

// Or with jQuery

$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
});



// Or with jQuery

