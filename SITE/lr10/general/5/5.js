var x1,x2,x3;
function moveRect(e){
    console.log(e.key)
    if(x1==undefined)
    {
x1=parseInt(e.key);
    }
    else if(x2==undefined)
    {
        x2=e.key;
    }
    else if(x3==undefined)
    {
        x3=parseInt(e.key);
    }
    else{
        switch(x2)
        {
            case "+":
            document.getElementById("result").innerHTML=x1+x3;
            break;
            case "-":
            document.getElementById("result").innerHTML=x1-x3;
            break;
            case "*":
            document.getElementById("result").innerHTML=x1*x3;
            break;
            case "/":
            document.getElementById("result").innerHTML=x1/x3;
            break;
        }
    }
}
 
addEventListener("keydown", moveRect);

