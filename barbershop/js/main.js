$(function(){

$('.photo-slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

  $('.menu-btn').on('click', function(){
    $('.menu-list').slideToggle();
  });
    
});
