"use strict";$("form").submit(function(e){$("#movies").empty();var t=$("#movieTitle").val(),i="http://www.omdbapi.com/?s="+t;console.log("Sending request to "+i);var o=$.get(i);return o.then(function(e){var t=e.Search,i=$("#movies").append("<ul>");t.forEach(function(e){i.append('<li><img src ="'+e.Poster+'">'+e.Title+"</li>")})}),!1}),$("input").keypress(function(e){13==e.keyCode&&(e.preventDefault(),$("form").submit())});