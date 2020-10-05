var close_form = function(){
  var form = $(".form").css({"visibility":"visible"});
  form.attr("value","closed");
  form.animate({width:"-=55%",height:"-=550px"}, function(){
    $(this).css({"visibility":"hidden"});
    $("#grey_cart_background").css({"visibility":"hidden"});
  });
 
}

var open_form = function(){
  $("#grey_cart_background").css({"visibility":"visible"});
  var form = $(".form").css({"visibility":"visible"});
  form.animate({width:"+=55%",height:"+=550px"});
  form.attr("value","opened");
}

var set_validation_message = function(object, text, value){
  var error_exp = new RegExp("_empty");
  var old_error = value.replace(error_exp, "");
  $('.validation_message[id="'+ old_error +'"]').remove();
  var left = parseInt(object.position().left);
  var top = parseInt(object.position().top);
  if(!$('.validation_message[id="'+value+'"]').length){
    var message = $('<div class="validation_message d-flex justify-content-center align-items-center" id="' + value + '"><p id class="m-2">'+ text +'</p></div>').css({"left":left, "top":top+40});
    var warning_sign = $('<img class="warning_sign mt-1" id='+ value +' src=images/warning.png width="30px" height="26px">').css({"left":left-30, "top":top});
    $(".form").append(message);
    $(".form").append(warning_sign);
  }
  else{
    $('.validation_message[id="'+value+'"]>p').text(text);
  }
  $('.warning_sign[id="' + value + '"]').effect("shake");
  $('.validation_message[id="'+value+'"]').effect("shake");
}

var empty_check = function(selector){
  if($("#"+selector).val().length == 0){
    set_validation_message($("#"+selector),"field can't be empty", selector+"_er_empty")
  }
  else{
    $("#"+selector+"_er_empty").remove();
    $("#"+selector+"_er_empty").remove();
  }
}

var clear_warnings = function(selector){
  $(selector).remove();
  $(selector).remove();
  $(selector + "_empty").remove();
  $(selector + "_empty").remove();

}
var check_fill_forms = function(){
  empty_check("name");
  empty_check("phone");
  empty_check("country");
  empty_check("city");
  empty_check("country");
  empty_check("postal_code");
}
$(".exit_form").on("click",function(){
  close_form();
})

$("#name").on("blur",function(){
  if($(this).val().length < 3){
    set_validation_message($(this), "Name can't be that short", "name_er");
  }
  else{
    clear_warnings("#name_er");
  }
});

$("#phone").on("blur",function(){
  if($(this).val().length < 8){
    set_validation_message($(this),"Phone can't be that short", "phone_er");
  }
  else if($(this).val()[0] != "+"){
    set_validation_message($(this),'Phone has to start with "+"', "phone_er");
  }
  else{
    clear_warnings("#phone_er");
  }
});

$("#country").on("blur",function(){
  if($(this).val().length < 3){
    set_validation_message($(this), "Country name can't be that short", "country_er");
  }
  else{
    clear_warnings("#country_er");
  }
});

$("#city").on("blur",function(){
  if($(this).val().length < 3){
    set_validation_message($(this), "City name can't be that short", "city_er");
  }
  else{
    clear_warnings("#city_er");
  }
  }
);

$("#postal_code").on("blur",function(){
  if($(this).val().length < 5){
    set_validation_message($(this),"Post Code is wrong", "post_code_er");
  }
  if($(this).val().length > 10)
    set_validation_message($(this),"Post Code is wrong", "post_code_er");

  if(!$(this).val().match(new RegExp ("[0-9]{5}([0-9]|$){5}"))){
    set_validation_message($(this),"Post Code is wrong", "post_code_er");
  }
  else{
    clear_warnings("#postal_code_er");
  }
});

$(".order_shipping").on("click", function(){
  check_fill_forms();
  if($(".validation_message").length){
    $(".validation_message").effect("shake");
    $(".warning_sign").effect("shake");
  }
  else{
  close_form();
  $(".alert_cart").text($(this).prev().prev().text() + "Your order has'been sucessfully sent to the manager");
  $(".alert_cart").css({"visibility":"visible"});
  $(".alert_cart").animate({opacity: "-0"},5000,function(){
    $(this).css({"opacity":"1","visibility":"hidden"});
  });
  myStorage.clear();
}
}
);