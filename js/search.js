// Searching from json

$(document).ready(function(){
  $.ajaxSetup({ cache: false });
  $('#search').keyup(function(){
   $('#result').html('');
   $('#state').val('');

  //  Getting the input of the user in the search field
   var searchField = $('#search').val();
   var expression = new RegExp(searchField, "i");

  //  getting data form data.json file
   $.getJSON('data.json', function(data) {
    $.each(data, function(key, value){
     if (value.title.search(expression) != -1 || value.location.search(expression) != -1)
     {
      // dispaying the results to the user
      $('#result').append('<li class="list-group-item link-class"> <strong>'+ value.title +'</strong>| '+ value.salary +' | <span class="text-muted">'+value.location+'</span></li>');
    }
    });   
   });
  });
  
  $('#result').on('click', 'li', function() {
   var click_text = $(this).text().split('|');
   $('#search').val($.trim(click_text[0]));
   $("#result").html('');
  });
 });