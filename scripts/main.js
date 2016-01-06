/* Main */

function load(lang) {
  $.get(lang+".departure", function(data) {
    $('#storyline_content').html(data);
  });
}

function loadInit() {
  var lang = (window.location.href.indexOf(".com") > -1 || window.location.href.indexOf("/en") > -1) ? "en" : "fr";  
  load(lang);
  return lang;
}

$(document).ready(function() {
  var langInit = loadInit();
  
  history.pushState({key : langInit}, 'version : '+langInit, '/'+langInit);
  
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
  
  $('.flag').on('click', function(event) {
    var lang = $(this).attr('data-lang');
    event.preventDefault();
    load(lang);
    history.pushState({key : lang}, 'version : '+lang, '/'+lang);
  });
  
  window.onpopstate = function(event) {
    if(event.state == null) {
      loadInit();
    } else {
      load(event.state.key);
    }
  }
});