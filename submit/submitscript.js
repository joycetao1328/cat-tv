$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('.navcontainer').slideToggle(500);
  });

$(window).resize(function() {
	   if (  $(window).width() > 600 ) {
		$('.navcontainer').removeAttr('style');
	 }
	});
});
