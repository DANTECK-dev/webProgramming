var rnd=Math.floor(Math.random() * (256 - 0));
var rnd1=Math.floor(Math.random() * (256 - 0));
var rnd2=Math.floor(Math.random() * (256 - 0));

$('#bB').click(function(event){
    $("#bB").css("background-color","rgb("+rnd+","+rnd1+","+rnd2+")");
});