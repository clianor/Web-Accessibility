(function () {
  // 라이트 박스
  $(".lightgallery").lightGallery();

  // 윈도우 팝업
  $(".window").click(function (e) {
    e.preventDefault();
    window.open(
      "sample_popup.html",
      "윈도우 팝업",
      "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0"
    );
  });

  // 레이어 팝업
  $(".layer").click(function (e) {
    e.preventDefault();
    $("#layer").show();
  });
  $("#layer .close").click(function (e) {
    e.preventDefault();
    $("#layer").hide();
  });

  // 탭 메뉴
  var $tab_list = $(".tab_menu");
  $tab_list.find("ul ul").hide();
  $tab_list.find("li.active > ul").show();

  function tabMenu(e) {
    e.preventDefault();
    var $this = $(this);
    // siblings - 형제 요소 탐색
    $this
      .next("ul")
      .show()
      .parent("li")
      .addClass("active")
      .siblings("li")
      .removeClass("active")
      .find(">ul")
      .hide();
  }
  $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

  // 배너
  $(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  });

  // 갤러리
  $(".gallery_img").slick({
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1,
  });
  $(".play").click(function () {
    $(".gallery_img").slick("slickPlay");
  });
  $(".pause").click(function () {
    $(".gallery_img").slick("slickPause");
  });
  $(".prev").click(function () {
    $(".gallery_img").slick("slickPrev");
  });
  $(".next").click(function () {
    $(".gallery_img").slick("slickNext");
  });

  // 버튼 클릭시 전체 메뉴를 보이게 함.
  $(".tit .btn").click(function (e) {
    e.preventDefault();
    $("#cont_nav").slideToggle(200);
    $(this).toggleClass("on");
  });
})();
