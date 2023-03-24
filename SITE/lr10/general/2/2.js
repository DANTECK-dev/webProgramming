function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}
function getRandomRGB()
{
    return "rgb("+getRandomInt(255)+","+getRandomInt(255)+"," +getRandomInt(255)+")";
}

function cl(elem)
{
    elem.style.color=getRandomRGB();
}

function out(elem)
{
    elem.innerHTML="Не наведен";
}

function on(elem)
{
    elem.innerHTML="Наведен";
}