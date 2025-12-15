$(function() {

  // ------------------------------------------
  // 1. ページ内スクロール（既存の機能）
  // ------------------------------------------
  $('a[href^="#"]').on('click', function() {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  // ------------------------------------------
  // 2. ページ上部へ戻るボタン（既存の機能）
  // ------------------------------------------
  var backToTop = $('#backToTop');
  backToTop.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      backToTop.fadeIn();
    } else {
      backToTop.fadeOut();
    }
  });
  $('#backToTop').on('click', function() {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  // ------------------------------------------
  // 3. ハンバーガーメニュー（今回追加した機能）
  // ------------------------------------------
  
  // ハンバーガーボタンをクリックした時の処理
  $('.hamburger').on('click', function() {
    // ボタンとメニューに .active クラスを付け外しする
    $(this).toggleClass('active');
    $('.gnav').toggleClass('active');
  });

  // メニューのリンクをクリックした時の処理（メニューを閉じる）
  $('.gnav-link').on('click', function() {
    $('.hamburger').removeClass('active');
    $('.gnav').removeClass('active');
  });

});