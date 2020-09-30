$(".product_info_picture").each(function(){
$(this).on("mouseenter", function(){
  $(this).attr("width","30px").attr("height","18px")
  });
});

$(".product_info_picture").each(function(){
  $(this).on("mouseout", function(){
  $(this).attr("width","25px").attr("height","15px")
  });
});

$(".product_info_button").each(function(){
  $(this).on("click", function(){
  if($(this).attr("value") == "down"){
    $(this).attr("value","up");
    $(this).parent().next().text("Some interesting content about this product from database.");
    $(this).children(1).attr("src","/images/arrow-up.png");
  }
  else{
    $(this).attr("value","down");
    $(this).parent().next().text("");
    $(this).children(1).attr("src","/images/Arrow-down.svg.png");
  }
  });
});