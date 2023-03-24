function setCoordinats(x,y)
{
    document.querySelector("div.circle").style.transform = "translate("+x+"px,"+y+"px)"
}

function getCoord(el, event) {


    var x = event.layerX;
    var y = event.layerY;
  console.log(x,y)
    setCoordinats(x,y);
  
  }


