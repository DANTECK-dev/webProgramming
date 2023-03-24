function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}
function getRandomRGB()
{
    return "rgb("+getRandomInt(255)+","+getRandomInt(255)+"," +getRandomInt(255)+")";
}

document.getElementById("date").innerHTML=new Date().toLocaleDateString();

var time=new Date();
if((time.getMinutes()%2)==0){
    document.getElementById("hdr").innerHTML="Каталог лесных зверей";
}
else
{
    document.getElementById("hdr").innerHTML="Лесные звери";
}

document.getElementById('rndclr').style.backgroundColor =getRandomRGB(256);

var arr=new Array("Bears.html",
"Main.html",
"Artiodactyls.html",
"Dogs.html",
"Rodents.html");
var a=document.getElementById('rndLink').href=arr[getRandomInt(5)];
