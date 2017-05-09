$(document).ready(function(){                    
  $(window).scroll(function(){                          
    if ($(this).scrollTop() > 200) {
      $('.scrollingBanner').fadeIn(500);
    } else {
      $('.scrollingBanner').fadeOut(500);
    }
  });
});