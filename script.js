$(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scrollToElement($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	 

	/*
        Background slideshow
    */
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
});

function scrollToElement(clickedAnchor, menuHeight) {
	var targetElementClass = clickedAnchor.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(targetElementClass != '.top-content') {
		targetElementClass += '-container';
		scroll_to = $(targetElementClass).offset().top - menuHeight;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}