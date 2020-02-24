$(document).ready(function () {
    $(".brand").click(function () {
        $(".brand img").toggle();
        $("#jumbo p").toggle();
    });
    $(".dev").click(function () {
        $(".dev img").toggle();
        $("#tron p").toggle();
    });
    $(".product").click(function () {
        $(".product img").toggle();
        $("#fluid p").toggle();
    });
    $("#one").hover(function () {
        $("#first").toggle();
    });
    $("#two").hover(function(){
        $("#test").toggle();
    });
    $("#three").hover(function(){
        $("#set").toggle();
    });
    $("#four").hover(function(){
        $("#st").toggle();
    });
    $("#five").hover(function(){
        $("#work").toggle();
    });

    $("#six").hover(function(){
        $("#stdi").toggle();
    });

    $("#seven").hover(function(){
        $("#std").toggle();
    });

    $("#eight").hover(function(){
        $("#studio").toggle();
    });
  
});


var userName = " ";
function myFunction(submit) {
   
    return userName;

}
alert("Hae" + userName + " we have received your message" + "." + "Thank you for reaching out to us")
myFunction();

