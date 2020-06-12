$(document).ready(function(){
	$('.hide').hide();
	
	$('h3').click(function() {
		
		// REMOVE THE ON CLASS FROM ALL BUTTONS
		$('h3').removeClass('on');
		
		// NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
		$('.hide').slideUp();
		
		// IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on');
			
			// OPEN THE SLIDE
			$(this).next().slideDown();
		}
	});
	
});