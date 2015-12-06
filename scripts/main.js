/* Main */

$(document).ready(function() {
  $('#wrapper').fadeIn(1200);
  /*
  setTimeout(function() {
    $('#wrapper').fadeIn(1200);
  }, 2000);
  */
  $(window).scroll(function() {
    if($(window).scrollTop() > 175) {
      $('#player').addClass('floating');
      $('#storyline').addClass('marginStoryline');
    } else {
      $('#player').removeClass('floating');
      $('#storyline').removeClass('marginStoryline');
    }
  });
});