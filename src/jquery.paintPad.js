
(function( $ ) {

  	$.widget( 'canvas.paintPad', {

		_create: function() {
            this.element.append('<canvas width="100px" height="100px"></canvas>');
            console.log(this.element);
		},
		
			
		_keypress: function(e) {
		}
	
	});
	
})( jQuery );
