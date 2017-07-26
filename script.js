$(document).ready(function() {
  $("#getQuote").on("click", function(){
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'http://quotes.rest/qod.json',
      success: function(data){
        $(".quote").html("<h1>" + data.contents.quotes[0].quote + "</h1><h5>" + data.contents.quotes[0].author + "</h5>");
      }
    });
  });
});
