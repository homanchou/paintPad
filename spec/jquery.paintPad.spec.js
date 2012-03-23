describe("paintPad", function() {
   beforeEach(function(){
     //loadFixtures
     setFixtures('<div id="drawing_area"></div>');
     $('#drawing_area').paintPad();
   });
   
   it("should contain a canvas", function() {
     expect($('#drawing_area')).toContain('canvas');
   }); 

   

});
