
(function( $ ) {

  	$.widget( 'canvas.paintPad', {

		_create: function() {
            this.element.append('<canvas></canvas>');
            console.log(this.element);
		},
		
			
		_keypress: function(e) {
		}
	
	});
	
})( jQuery );
