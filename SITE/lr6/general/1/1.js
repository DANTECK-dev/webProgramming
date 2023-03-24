
function out()
{
    var x=parseInt(document.getElementById("input").value);
    var res;
            if(x>0)
            {
                res=x*x;
                let a=document.getElementById('output').innerHTML=res;
            }
            else if(x<0)
            {
                res=x*x;
                console.log(res);
            }
            else if(x===0)
            {
                alert("Введён 0");
            }
        else
        {
            console.log("Число не введено!!!")
        }
}

    

