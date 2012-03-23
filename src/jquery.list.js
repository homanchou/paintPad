
(function( $ ) {

	$.widget( 'dp.list', {
		
		_create: function() {
			var self = this;
			
			this.input = $( this.options.input )
				.keypress( $.proxy( this._keypress, self ) );
				
			this.element.delegate( 'a.remove', 'click', function(e) {
				e.preventDefault();
				$(this).parents('li').remove();
			});
		},
		
		_addItem: function( e ) {
			var val = this.input.val();
			
			if ( /[^\s]/.test( val ) ) {
				var item, remove;
				
				remove = $( '<a href="#" class="remove" title="Remove">Remove</a>' );
				
				item = $( '<li />' )
					.text( val )
					.append( remove );
					
				this.element.append( item )
				
				this.input.val('');
			}
		},
		
		_keypress: function(e) {
			if ( e.which == $.ui.keyCode.ENTER ) {
				e.preventDefault();
				this._addItem(e);
			}
		}
		
	});
	
})( jQuery );