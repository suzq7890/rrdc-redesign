$( document ).ready(function() {
	// give search placeholder white color 
	//$("input.search::-webkit-input-placeholder").css("color","white");

	//
	// Set columns of equal height
	//
	//$('div.top-level-item').equalHeights();




	function equalHeight(el) {
		var tallestDiv = 0;
		var divHeight = 0;
		el.each( function() {
			$(this).removeAttr("style");
			divHeight = $(this).height(); 
			if( divHeight > tallestDiv ) {
				tallestDiv = divHeight;
			}
		});
		el.height(tallestDiv);
	}
		
	//
	// When document is ready, run these functions
	//
	function resizeElements() {
		if( $( window ).width() > 768) {
			equalHeight($('.match-height'));
			
			// equalHeight($('.primary li ul'));

			//equalHeight($('.primary li'));
		 } else {
		 	$('.match-height').removeAttr("style");
		}
	}


	//
	// When the window is resized, run these functions
	//
	$( window ).resize( function() {
		resizeElements();
	});

});