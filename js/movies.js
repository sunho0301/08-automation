'use strict';

//when the form is submitted
$('form').submit(function(event) {

   //get what the user typed in
   var searchTerm = $('#movieTitle').val();
   
   //construct the url to query
   var url = 'http://www.omdbapi.com/?s='+searchTerm;
   console.log('Sending request to '+url);

   //send the AJAX request
   $.get(url);


   //don't submit form as usual
   return false; //jQuery specific version of event.preventDefault()
});


//have enter submit form (for convenience)
$('input').keypress(function(event) {
   if (event.keyCode == 13) { //if enter key pressed
      event.preventDefault(); //don't do normal work
      $('form').submit(); //submit the form
   }
});