

// タブ切り替え//

$(function () {
  let filters = $('.filter [data-filter]')   //タブ
  let boxes = $('.lineup-wrapper [data-category]');  //ボックス
  filters.click(function (e) {

    e.preventDefault();
    filters.removeClass('active');
    $(this).addClass('active');

    let filterTime = $(this).attr('data-filter');

    boxes.fadeOut().promise().done(function () {
      boxes.filter('[data-category = "' + filterTime + '"]').fadeIn();
    })
  })
})








// ハンバーガーメニュー

$(function () {


  $('.menu-trigger').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.g-navi').addClass('active');
    } else {
      $('.g-navi').removeClass('active');
    }
  });


  $('.nav-wrapper ul li a').click(function () {
    $('.menu-trigger').removeClass('active');
    $('.g-navi').removeClass('active');
  });


});









// スライドショー

let i = 1;
$(function () {

  setInterval(function () {
    if (i > 3) i = 1;
    $("#main-visual").css("background-image", "url('./images/mv/mv" + i + ".jpg')");
    i++;
  }, 3000
  );

});








// 画面をスクロールするとふわっと出現

$(function () {

  $(window).scroll(function () {

    $('.fadein').each(function () {
      let position = $(this).offset().top;//ページ最上部から要素までの距離
      let scroll = $(window).scrollTop();//スクロール量
      let windowHeight = $(window).height();//ウィンドウの高さ

      if (scroll > position - windowHeight) {
        $(this).addClass('active');
      }

    });
  });

});









// トップページに戻るボタン
$(function () {


  let topBtn = $('#page-top');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });


  topBtn.click(function () {
    $('html').animate({
      scrollTop: 0
    }, 600);
  });
});
