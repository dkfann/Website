$(document).ready(function() {
  
  alert("hello");
  $("#owl-demo").owlCarousel();
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

function test()
{
	alert("Test!");
}