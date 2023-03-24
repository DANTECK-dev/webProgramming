function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}
    var x=document.getElementById("abc");
    var rnd1=getRandomInt(500);
    var rnd2=getRandomInt(500)
    x.style.height=rnd1+"px";
    x.style.width=rnd2+"px";
    x.innerHTML=(rnd1*rnd2);
    x.style.backgroundColor="rgb("+getRandomInt(255)+','+getRandomInt(255)+','+getRandomInt(255)+")";