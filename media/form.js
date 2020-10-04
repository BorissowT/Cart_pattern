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
  var left = parseInt(object.position().left);
  var top = parseInt(object.position().top);
  if(!$('.validation_message[id="'+value+'"]').length){
    var message = $('<div class="validation_message d-flex justify-content-center align-items-center" id="' + value + '"><p id class="m-2">'+ text +'</p></div>').css({"left":left, "top":top+40});
    var warning_sign = $('<img class="warning_sign mt-1" id='+ value +' src=images/warning.png width="30px" height="26px">').css({"left":left+460, "top":top});
    $(".form").append(message);
    $(".form").append(warning_sign);
    console.log(text);
  }
  else{
    $('.validation_message[id="'+value+'"]>p').text(text);
  }
  $('.warning_sign[id="' + value + '"]').effect("shake");
  $('.validation_message[id="'+value+'"]').effect("shake");
}

$(".exit_form").on("click",function(){
  close_form();
})

$("#name").on("blur",function(){
  if($(this).val().length < 3){
    set_validation_message($(this), "Name can't be that short", "name_er");
  }
  else{
    $("#name_er").remove();
    $("#name_er").remove();
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
    $("#phone_er").remove();
    $("#phone_er").remove();
  }
});
$("#country").on("blur",function(){
  if($(this).val().length < 3){
    set_validation_message($(this), "Country name can't be that short", "country_er");
  }
  else{
    $("#country_er").remove();
    $("#country_er").remove();
  }
});
$("#city").on("blur",function(){
  if($(this).val().length < 3){
    set_validation_message($(this), "City name can't be that short", "city_er");
  }
  else{
    $("#city_er").remove();
    $("#city_er").remove();
  }
});
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
    $("#post_code_er").remove();
    $("#post_code_er").remove();
  }
});