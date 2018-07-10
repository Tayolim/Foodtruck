'use strict';

var sections = ['#one', '#two', '#three','#follow'];
var currentPos = 0;

$(function() {
  $('.window').css({
    'height': window.innerHeight,
  });

  $(window).resize(() => {
    $('.window').css({
      'height': window.innerHeight,
    });
  });

  scrollListen();

});


function scrollListen () {
  $(window).on('scroll', function(){
    $(window).off('scroll');

    let origin = $(window).scrollTop();
    let delta = 0;

    $(window).on('scroll', () => {
      delta = origin - $(window).scrollTop();
      if (window.matchMedia('screen and (min-width: 1200px)').matches){//added if statement to make sure it only happens when screen is largest//

      if(Math.abs(delta) > 25){
        $(window).off('scroll');

        if(delta < 0 && sections[currentPos + 1]){
          currentPos++;

          setTimeout(function() {
            $('html, body').animate({scrollTop: $(sections[currentPos]).offset().top}, 500, function() {
              scrollListen();
            });
          }, 500);

        }else if(delta > 0 && sections[currentPos - 1]){
          currentPos--;

          setTimeout(function() {
            $('html, body').animate({scrollTop: $(sections[currentPos]).offset().top}, 500, function() {

              scrollListen();
            });
          }, 500);
        }
      }
    }
    });
  });
}
