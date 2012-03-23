describe("jquery.list", function() {
	var textbox, 
		list;
	
	beforeEach(function() {
		jasmine.getFixtures().set('<input id="textbox" type="text" /><ul id="list" />');
		
		this.addMatchers({
			toContainText: function(expected) {
				return this.actual.indexOf( expected ) >= 0;
			}
		});
		
		textbox = $('#textbox');
		list = $('#list').list({
			input: textbox
		});
	});
	
	describe("pressing enter in input when it's got a value", function() {
		var testText = 'THIS IS SOME TEXT';
		
		beforeEach(function() {
			// create enter keypress event
			var keypress = $.Event('keypress');
			keypress.which = $.ui.keyCode.ENTER;
			
			// set textbox value
			textbox.val( testText );
			
			// Send event
			textbox.trigger( keypress );
		});
		
		it("should add item to list", function() {
			expect( list.children().length ).toEqual( 1 );
		});
		
		it("item should contain entered text", function() {
			expect( list.find( 'li' ).text() ).toContainText( testText )
		});
		
		describe("clicking remove link", function() {
			it("should remove item", function() {
				var click = $.Event('click');
				list.find('li a').trigger( click );
				
				expect( list ).toBeEmpty();
			});
		});
	});
	
	describe("pressing enter in input when there's no value", function() {
		beforeEach(function() {
			var keypress = $.Event('keypress');
			keypress.which = $.ui.keyCode.ENTER;
			
			textbox.val('');
			
			textbox.trigger( keypress );
		});

		it("should not add an item", function() {
			expect( list ).toBeEmpty();
		});
	});
});