jQuery( document ).ready(function() {
	jQuery('#scrollUp img').mouseover( function(){
		jQuery( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		jQuery( this ).animate({opacity: 1},100);
	}).click( function(){
		window.scroll(0 ,0); 
		return false;
	});

	jQuery(window).scroll(function(){
		if ( jQuery(document).scrollTop() > 0 ) {
			jQuery('#scrollUp').fadeIn('fast');
		} else {
			jQuery('#scrollUp').fadeOut('fast');
		}
	});
});