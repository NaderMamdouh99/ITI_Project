

////seach by name or letters 
$(document).ready(function() {
    $('#searchButton').on('input', function() {
      var filterValue = $(this).val().toLowerCase();
      $('.card').each(function() {
        var title = $(this).find('.card-title').text().toLowerCase();
     
        
        if (title.indexOf(filterValue) > -1) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
   











