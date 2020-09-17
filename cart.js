$("#cart_button").on("click",function(){
  if($(this).attr("value") == "closed"){
    $(this).attr("value","opened");
    $(".cart_container").css({"visibility":"visible"});
    $("#grey_cart_background").css({"visibility":"visible"});
    $(".cart_container").animate({width:"+=50%",height:"+=60%"})
  }
  else{
    $(this).attr("value", "closed");
    $(".cart_container").animate({width:"-=50%",height:"-=60%"}, function(){$(this).css({"visibility":"hidden"});});
    $("#grey_cart_background").css({"visibility":"hidden"});
  }
})

$(".exit_cart").on("click", function(){
  $("#cart_button").attr("value", "closed");
  $(".cart_container").animate({width:"-=800px",height:"-=550px"}, function(){$(this).css({"visibility":"hidden"});});
  $("#grey_cart_background").css({"visibility":"hidden"});
})

$("#grey_cart_background").on("click", function(){
  $("#cart_button").attr("value", "closed");
  $(".cart_container").animate({width:"-=800px",height:"-=550px"}, function(){$(this).css({"visibility":"hidden"});});
  $("#grey_cart_background").css({"visibility":"hidden"});
})

$(".add_to_cart").on("click", function(){
  $(".alert_cart").stop();
  $(".alert_cart").css({"opacity":"1","visibility":"hidden"});
  $(".alert_cart").text($(this).prev().prev().text() + "added to cart!");
  $(".alert_cart").css({"visibility":"visible"});
  $(".alert_cart").animate({opacity: "-0"},3000,function(){
    $(this).css({"opacity":"1","visibility":"hidden"});
  });
  
})