$(function() {  // ← ここをシンプルにするだけでOKです
  $('.slider_thumb').slick({
    arrows: false,
    asNavFor: '.thumb',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
  });
  $('.thumb').slick({
    asNavFor: '.slider_thumb',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });
});