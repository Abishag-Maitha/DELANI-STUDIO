$(document).ready(function(){
    $(".bt").click(function(){
        $(this).find("p").slideToggle(500).closest(".bt").find("img").slideToggle(700)
      
    });
  });