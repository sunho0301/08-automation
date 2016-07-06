'use strict';

//Add a document-ready event handler so that your script 
//will apply to the loaded DOM

$(document).ready(function() {

//Inside that event callback,

  //Assign a click listener so that the radius of the circle
  //increases by 10% pixels every time it is clicked.
  //  HINT: see the `.attr()` method

$('circle').click(function(event) {
  var newR = $(this).attr('r') * 1.1;
 $('circle').attr('r', newR); 
})



  //Select all 'removable' elements, and for each assign a 
  //click event listener which removes the clicked element
  //  HINT: see the `.remove()` method
  //  EXTRA: have them animate away (either fadeOut or slideUp)
 /* 
var removeButton =
$('.removable').click(function(event) {
  //$(this).remove();
  $(this).fadeOut();
});
*/
var removeButton = function() {
  $(this).fadeOut();};

  $('.removable').click(removeButton);

  //Add functionality so that the 'add' button adds an extra
  //"Remove me!" button. These buttons should appear ABOVE
  //the 'add' button
  //  CHALLENGE: make these new buttons also be removable!
  //             Reuse your functions so you don't duplicate
  //             code!
$('#add').click(function(event) {
  var button = $('<p><button class="removable">Remove me!</button></p>');
  button.click(removeButton);
  
  // add button before 'add'
  $('#add').before(button);
  
  // add 'add' before 'button'
  //$('#add').insertbefore(button);


})


})