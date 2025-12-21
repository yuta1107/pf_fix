$(function() {

  // ---------------------
  // 1. ページ内スクロール
  // ---------------------
  $('a[href^="#"]').on('click', function() {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    
    // PCの場合は固定ヘッダーの高さを引く
    var headerHeight = 0;
    if (window.matchMedia('(min-width: 768px)').matches) {
      headerHeight = $('.gnav').outerHeight();
    }

    var position = target.offset().top - headerHeight;
    
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    
    // スマホメニューが開いている場合は閉じる
    $('.hamburger').removeClass('active');
    $('.gnav').removeClass('active');
    
    return false;
  });

  // -----------------------
  // 2. ページ上部へ戻るボタン
  // -------------------------
  var backToTop = $('#backToTop');
  backToTop.hide();
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      backToTop.fadeIn();
    } else {
      backToTop.fadeOut();
    }
  });

  $('#backToTop a').on('click', function(event) {
    event.preventDefault();
    $('body, html').animate({
      scrollTop: 0
    }, 300);
  });

  // -----------------------
  // 3. ハンバーガーメニュー
  // -----------------------
  
  $('.hamburger').on('click', function() {
    $(this).toggleClass('active');
    $('.gnav').toggleClass('active');
  });

});