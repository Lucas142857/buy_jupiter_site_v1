/* Main */

$(document).ready(function() {
  $('#wrapper').delay(7500).fadeIn(1600, function() {
    $('body').css('overflow', 'auto');
    $('iframe').attr('src', 'http://bandcamp.com/EmbeddedPlayer/track=4293759057/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/');
  });
  
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