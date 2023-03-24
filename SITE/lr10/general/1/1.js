var arr=new Array;

function print()
{   
    var result='<ol>';
    for(let i=0;i<arr.length;i++)
    {
        result+="<li>"+arr[i]+"</li>";
    }
    result+='</ol>';
    document.getElementById("output").innerHTML=result;
}

function out()
{
    var x=document.getElementById("input").value;
    
    if(x!='')
    {
      arr.push(x);
      print();
    }
    else
    {
        alert("Введено неверное значение!!!");
    }

    document.getElementById("input").value="";
}