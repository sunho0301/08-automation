'use strict';

/* Testing code can go here */

/* EXERCISE */

//Using jQuery methods, add a musical note symbol ♫ (entity &#9835) 
//to both the beginning and end of every paragraph in the song section.


//Using a jQuery method, add a `<div>` around every line in the song. 
//This <div> should have a class of "out" if the line rhymes with with "out", 
//and a class of "ain" if the line rhymes with "rain".
//   HINT: This is tricky! Look carefully at the jQuery examples and String methods
//				 You'll need to use an if statement

$('#song p').wrap(function() {
    var text = $(this).text();
    if(text.endsWith('ain.')){
        var whichClass = 'ain';
    } else if(text.endsWith('out.')){
        var whichClass = 'out';
    }
    else {
        var whichClass = '';
    }
    return '<div class="'+whichClass+'"></div>';
});

$('#song p').prepend('♫ ').append(' ♫');



//Using a jQuery method, remove the lines from the song that contain the word "sing"
//  HINT: Again, look carefully at the jQuery examples!
