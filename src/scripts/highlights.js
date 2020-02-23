$(document).ready(function(){
     
    $('.highlights-carousel').slick({
 
       slidesToShow: 1,
       slidesToScroll:1,
        autoplay:true,
        autoplaySpeed: 2000,
        dots:true,
        // arrows:true,
    });
    var total_count= $('.highlights-carousel .slick-dots li').length ;
    $('.highlights-carousel .slick-dots li:first-child').prepend("<span class='count current-slide'>" + 1 + "</span>"); 
    $('.highlights-carousel .slick-dots li:last-child').append("<span class='count total-count'>" + total_count + "</span>"); 
     
     $('.highlights-carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.highlights-carousel .current-slide').text(Number(parseInt(currentSlide) + 1)); 
    });
  });