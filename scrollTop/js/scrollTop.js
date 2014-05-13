//ページ上に移動さすやつ
$(document).ready(function() {
  $('#back2top').hide();
  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 400) {
        $('#back2top').fadeIn();
      } else {
        $('#back2top').stop().fadeOut();
      }
    });
    $('#back2top a').click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
});