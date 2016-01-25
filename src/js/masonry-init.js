$(document).ready(function(){ 
$('#ms-container').masonry({
  itemSelector: '.ms-item',
      singleMode: false,
  isResizable: true,
  isAnimated: true,
      animationOptions: { 
      queue: false, 
      duration: 500 
  }
}); 
});