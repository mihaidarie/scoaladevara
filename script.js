$(document).ready(function() {
	$('a.scrollToElement').click(function(e) {
		e.preventDefault();
		var clickedAnchor = $(this);
		var menuHeight = $('nav').outerHeight();
		var targetElementClass = clickedAnchor.attr('href').replace('#', '.');
		var scroll_to = 0;
		if(targetElementClass != '.homeSection') {
			targetElementClass += 'NavigationLink';
			scroll_to = $(targetElementClass).offset().top - menuHeight;
		}
		if($(window).scrollTop() != scroll_to) {
			$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
		}
	});
});