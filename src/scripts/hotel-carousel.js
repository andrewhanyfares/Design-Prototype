$(document).ready(function () {

    $('.hotel-carousel ul').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        dots:true,
     
    });

    var total_count= $('.hotel-carousel ul .slick-dots li').length ;
   $('.hotel-carousel ul').append("<span class='count current-slide'>" + 1 +" </span>"); 
   $('.hotel-carousel ul').append("<span class='count total-count'> / " + total_count + "</span>"); 
    $('.hotel-carousel ul').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.hotel-carousel ul .current-slide').text(Number(parseInt(currentSlide) + 1)); 
      });
});
