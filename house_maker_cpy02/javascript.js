$(function() {
  // 1. スライダーの設定
  $('.slider_thumb').slick({
    arrows: false,
    asNavFor: '.thumb',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    fade: true,
  });
  
  $('.thumb').slick({
    asNavFor: '.slider_thumb',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  });

  // 2. スクロール時のフェードインアニメーション
  
  // ★動きの処理を関数（function）としてまとめる
  function fadeAnime(){
    $('.fade-in').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 150){
        $(this).addClass('active');
      }
    });
  }

  // ★スクロールした時に実行
  $(window).scroll(function (){
    fadeAnime();
  });

  // ★ページを読み込んだ時にも実行（これが今回の修正！）
  $(window).on('load', function(){
    fadeAnime();
  });

  // 3. ハンバーガーメニューの開閉
  $(".btn-gnavi").on("click", function() {
      $(this).toggleClass("active");
      $("#global-navi").toggleClass("active");
  });

  // ★追加：メニュー内のリンクを押した時の処理
  // リンクを押したらメニューを閉じる設定（スマホ用）
  $(".menu li a").on("click", function() {
      $(".btn-gnavi").removeClass("active");
      $("#global-navi").removeClass("active");
  });

  // ★追加：ページ内リンクのスムーズスクロール
  // #で始まるリンクをクリックしたら実行
  $('a[href^="#"]').click(function() {
      // リンクの値（#section01など）を取得
      var href = $(this).attr("href");
      
      // 移動先を取得（hrefが#または空ならhtml（トップ）をターゲットに）
      var target = $(href == "#" || href == "" ? 'html' : href);
      
      // 移動先の位置（縦方向の距離）を取得
      var position = target.offset().top;
      
      // スムーズにスクロール（速度500ミリ秒）
      $("html, body").animate({scrollTop: position}, 500, "swing");
      
      return false; // URLに#がつかないようにする
  });
});