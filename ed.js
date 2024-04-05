$(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 6,
      slidesToScroll: 6,
      autoplay: false,
      autoplaySpeed: 1500,
      arrows: true, // Set arrows to true
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>', // Add left arrow
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>', // Add right arrow
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  });