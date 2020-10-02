var myStorage = window.localStorage;

var plus_product_function = function(elem){
  var product = $(".product_title",elem.parent().parent().parent().parent()).text();
  const json = myStorage[product];
  var new_product = JSON.parse(json);
  new_product.amount++;
  myStorage.setItem(new_product.name,JSON.stringify(new_product));
  $(".total_amount", elem.parent().parent()).text(new_product.amount);
  $(".total_price_product",elem.parent().parent().parent().next()).text(new_product.price*new_product.amount + "$"+"("+new_product.price+ "$"+")");
  count_total_price();
}

var minus_product_function = function(elem){
  var product_name = $(".product_title", elem.parent().parent().parent().parent()).text();
  const json = myStorage[product_name];
  var new_product = JSON.parse(json);
  if(new_product.amount==1){
    elem.parents(".product_in_cart").remove();
    remove_product(product_name);
  }
  else{
    new_product.amount--;
    myStorage.setItem(new_product.name,JSON.stringify(new_product));
    $(".total_amount", elem.parent().parent()).text(new_product.amount);
    $(".total_price_product",elem.parent().parent().parent().next()).text(new_product.price*new_product.amount + "$"+"("+new_product.price+ "$"+")");
   }
  count_total_price();
}

var remove_product = function(name)
{
  myStorage.removeItem(name);
}

var count_total_price = function(){
  var total = 0;
  for(i=0;i<myStorage.length;i++){
    const json = myStorage[myStorage.key(i)];
    const product_json = JSON.parse(json);
    total += product_json.amount*product_json.price;
  }
  $("#total").text(total+"$");
  $("#total_with_taxes").text(Number.parseFloat(total*1.1).toFixed(2)+"$");

}

var fill_products_in_cart = function(){
  var products_field = $(".products");
  $(".cart_bottom").empty();
  products_field.empty();
  if(myStorage.length == 0){
    var empty_message = $("<h2>There is no products in the cart yet...</h2>");
    products_field.append(empty_message);
  }
  else{
    for(i=0;i<myStorage.length;i++){
      var pruduct_frame =  $('<div class="product_in_cart"><img class="border_solid_black" src="" width="112px" height="112px"><div class="d-flex justify-content-between ml-2" style="width: 80%;"><div style="width: 100%;"><div class="d-flex d-flex justify-content-between"><h3 class="product_title mt-1 ml-1"></h3><div class="remove_product"><img src="images/close.png" width="13px" height="13px"></div></div><div class="d-flex justify-content-between"><h5 class="mx-1">Total amount:</h5><div class="d-flex justify-content-between"><div class="mt-1 mr-1"><div id ="plus_product"class="plus_product d-flex justify-content-between"><img style="margin-left: -1px;" src="/images/arrow-up.png" height="9px" width="20px"></div><div id="minus_product" class="minus_product d-flex justify-content-between"><img style="margin-left: -1px;" src="/images/Arrow-down.svg.png" height="9px" width="20px"></div></div><h5 class="total_amount">2</h5></div></div><div class="d-flex justify-content-between"><h5 class="mx-1">Total price:</h5><h5 class="total_price_product"></h5></div></div></div></div>');
      pruduct_frame.attr("id","product_"+i)
      products_field.append(pruduct_frame);
      var new_product = $("#product_"+i);
      const json = myStorage[myStorage.key(i)];
      const product_json = JSON.parse(json);
      new_product.children(1).attr("src",product_json.picture);
      new_product.children(2).children(1).children().children().first().text(product_json.name);
      $(".total_price_product", new_product).text(product_json.price*product_json.amount + "$"+"("+product_json.price+ "$"+")");
      $(".total_amount", new_product).text(product_json.amount);
    }
    $(".plus_product").on("click", function(){
      plus_product_function($(this));
    });
    $(".minus_product").on("click", function(){
      minus_product_function($(this));
    });
    $(".remove_product").on("click",function(){
      $(this).parents(".product_in_cart").remove();
      var product_name = $(this).prev().text();
      remove_product(product_name);
    })
    $(".cart_bottom").append($('<div style="width: 90%;"><div class="d-flex justify-content-between"><h2>TOTAL PRICE</h2><h2 id="total"></h2></div><div class="d-flex justify-content-between"><h5>total price with 10% taxes</h5><h5 id="total_with_taxes"></h5></div></div><div class="order_button"><p>BUY</p></div>'));
    $(".order_button").on("click", function(){
      close_cart();
      open_form();
    });
    count_total_price();
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

var close_cart = function(){
  $("#cart_button").attr("value", "closed");
  $(".cart_container").animate({width:"-=55%",height:"-=60%"}, function(){$(this).css({"visibility":"hidden"});});
  $("#grey_cart_background").css({"visibility":"hidden"});
}

$("#cart_button").on("click",function(){
  if($(this).attr("value") == "closed" && $(".form").attr("value") == "closed"){
    $(this).attr("value","opened");
    $(".cart_container").css({"visibility":"visible"});
    $("#grey_cart_background").css({"visibility":"visible"});
    $(".cart_container").animate({width:"+=55%",height:"+=550px"})
    if(myStorage.length>=3)
      $(".products").css({"overflow-y":"scroll"});
    else
      $(".products").css({"overflow-y":"hidden"});
    fill_products_in_cart();
  }
  else if ($(this).attr("value") == "opened" && $(".form").attr("value") == "closed"){
    close_cart();
  }
  else{
    close_form();
  }
})

$(".exit_cart").on("click", function(){
    close_cart();
})

$("#grey_cart_background").on("click", function(){
    close_cart();
    close_form();
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

