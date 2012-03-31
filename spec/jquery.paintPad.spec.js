describe("paintPad", function() {
   beforeEach(function(){
     //loadFixtures
     setFixtures('<div id="drawing_area"></div>');
     $('#drawing_area').paintPad();
   });
   
   it("should contain a canvas", function() {
     expect($('#drawing_area')).toContain('canvas');
   }); 

   it("canvas should have default size", function() {
       expect($('#drawing_area').find('canvas').width()).toHaveValue(100);
   });

   

});
