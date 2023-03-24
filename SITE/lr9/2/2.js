function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}

function getCoordinats()
{
    document.querySelector("div.circle").style.transform = "translate("+getRandomInt(500)+"px,"+getRandomInt(500)+"px)"
}

function updateTime()
{
    getCoordinats();
}
setInterval(updateTime,3000);

