/* Main */

$(document).ready(function() {
  $('#wrapper').fadeIn(1600);
  
  $(window).scroll(function() {
    if($(window).scrollTop() > 215) {
      $('#player').addClass('floating');
      $('#storyline').addClass('marginStoryline');
    } else {
      $('#player').removeClass('floating');
      $('#storyline').removeClass('marginStoryline');
    }
  });
});