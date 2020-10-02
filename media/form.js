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

var set_validation_message = function(object, text){
  var left = parseInt(object.position().left);
  var top = parseInt(object.position().top);
  var message = $('<div class="validation_message"></div>').css({"left":left, "top":top+40});
  $(".form").append(message);
}

$(".exit_form").on("click",function(){
  close_form();
})

$("#name").on("blur",function(){
  if($(this).val().length < 3){
    set_validation_message($(this), "Name can't be that short");
  }
});

$("#phone").on("blur",function(){
  if($(this).val().length < 8){
    set_validation_message($(this),"Phone can't be that short");
  }
  if((this).val()[0] != "+"){
    set_validation_message($(this),'Phone hast to start with "+"');
  }
});
$("#country").on("blur",function(){
  if($(this).val().length < 3){
    set_validation_message($(this), "Country name can't be that short");
  }
});
$("#city").on("blur",function(){
  if($(this).val().length < 3){
    set_validation_message($(this), "City name can't be that short");
  }
});
$("#postal_code").on("blur",function(){
  if($(this).val().length < 3){
    set_validation_message($(this),"Post Code can't be that short");
  }
  var content = $(this).val()
  console.log(content.search(new RegExp ("^[0-9]")));
});