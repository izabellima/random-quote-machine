  $(document).ready(function() {

    $("#getQuote").on("click", function(){
      $.getJSON("/json/cats.json", function(json) {
        $(".quote").html(JSON.stringify(json));
      });
    });

  });
