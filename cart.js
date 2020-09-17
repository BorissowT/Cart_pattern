var myStorage = window.localStorage;

var fill_products_in_cart = function(){
 
  for(i=0;i<myStorage.length;i++){
    var pruduct_frame =  $('<div class="product_in_cart"> <img class="border_solid_black" src="" width="112px" height="112px"> <div class="d-flex justify-content-between ml-2" style="width: 80%;"><div style="width: 100%;"> <h3 class="product_title mt-1 ml-1"></h3> <div class="d-flex justify-content-between"><h5 class="mx-1">Total amount:</h5><h5 class="total_amount"></h5></div><div class="d-flex justify-content-between"><h5 class="mx-1">Total price:</h5><h5 class="total_price"></h5></div></div></div></div>');
    pruduct_frame.attr("id","product_"+i)
    $(".products").append(pruduct_frame);
    var new_product = $("#product_"+i);
    const json = myStorage[myStorage.key(i)];
    const product_json = JSON.parse(json);
    new_product.children(1).attr("src",product_json.picture);
    new_product.children(2).children(1).children().first().text(product_json.name);
    $(".total_price", new_product).text(product_json.price*product_json.amount + "$"+"("+product_json.price+ "$"+")");
    $(".total_amount", new_product).text(product_json.amount);
  }
}

var add_to_cart_save_in_storage = function(elem){

  const product = {
    name: elem.attr("name"),
    price: elem.attr("price"),
    picture: elem.parent().siblings(1).attr("src"),
    amount: 1
};
  if(Object.keys(myStorage).includes(product.name)){
    const json = myStorage[product.name];
    var new_product = JSON.parse(json);
    new_product.amount++;
    myStorage.setItem(new_product.name,JSON.stringify(new_product));
  }
  else
    myStorage.setItem(product.name,JSON.stringify(product));

}

$("#cart_button").on("click",function(){
  if($(this).attr("value") == "closed"){
    $(this).attr("value","opened");
    $(".cart_container").css({"visibility":"visible"});
    $("#grey_cart_background").css({"visibility":"visible"});
    $(".cart_container").animate({width:"+=55%",height:"+=60%"})
    if(myStorage.length>3)
      $(".products").css({"overflow-y":"scroll"});
    else
      $(".products").css({"overflow-y":"hidden"});
    fill_products_in_cart();
  }
  else{
    $(this).attr("value", "closed");
    $(".cart_container").animate({width:"-=55%",height:"-=60%"}, function(){$(this).css({"visibility":"hidden"});});
    $("#grey_cart_background").css({"visibility":"hidden"});
  }
})

$(".exit_cart").on("click", function(){
  $("#cart_button").attr("value", "closed");
  $(".cart_container").animate({width:"-=55%",height:"-=60%"}, function(){$(this).css({"visibility":"hidden"});});
  $("#grey_cart_background").css({"visibility":"hidden"});
})

$("#grey_cart_background").on("click", function(){
  $("#cart_button").attr("value", "closed");
  $(".cart_container").animate({width:"-=55%",height:"-=60%"}, function(){$(this).css({"visibility":"hidden"});});
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
  add_to_cart_save_in_storage($(this));
})