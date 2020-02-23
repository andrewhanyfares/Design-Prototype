$(document).ready(function(){
    $('.side-slider').slick({
       slidesToShow: 1,
       slidesToScroll:1,     
    });

    $('.next').click(function(){
      $('.slick-next').click();
      
  });
 
  $( ".side-slider" ).after( "<div></div><div></div>" );
  });
