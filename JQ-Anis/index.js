/*Using different types of method like text(),html(),append(),prepend(),after(),before()*/
$("h2").text("goodbye"); /*Text munipolation*/
$(".my-div h2").text("Hello abul");
$("#pl ,h3").text("You are from Chittagong");
$("h4").html("<b>Every night in my dream!</b>"); /*Using HTML method.It's replace any text */
$("h5").append("Hello programmer"); /*Using append method.It's not change any text it can add text */
$("h6").prepend("Hello programmer"); /*Using append method.It's not change any text it can add text */

var mypara = $("<h1></h1>").text("This is Bangladesh(Before method)");
$(".my-div h2").before(mypara); /*Using before method.It's add text before previous existing text */

var mypara = $("<h1></h1>").text("This is the poor country(After method)");
$(".my-div h2").after(mypara); /*Using after method.It's add text after previous existing text */
$("a").attr("href","https://www.facebook.com/");/*Using set attribute*/
/*$("a").removeAttr("href","google.com") Remove attribute*/