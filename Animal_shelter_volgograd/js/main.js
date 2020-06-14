$(function(){
    
  $('.pets-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
  
  $('.menu-btn').on('click', function(){
    $('.menu-list').slideToggle();
  });

});