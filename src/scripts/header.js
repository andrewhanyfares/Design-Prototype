$(document).ready(function () {

  // add sticky class to header

  $(document).scroll(function () {
    if ($(document).scrollTop() >= 1) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });


  $('.icon-search').click(function () {

    $('.header-actions ul').prepend('<span class="header-search-container"><input class="header-search" type="text"></span>')
    if ($('.header-search').length > 1) {
      $('.header-search').remove();
    }
  });
});