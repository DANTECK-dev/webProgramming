function out()
{
    var arr=new Array(src='images/1.jpg',
    src='images/2.jpg',
    src='images/3.jpg')

    var x=parseInt(document.getElementById("input").value);
    
    if(x>3 || x<=0)
    {
        alert("Введено неверное значение!!!");
    }
    else
    {
        var thehtml='<img src="'+arr[x-1]+'" />';
        let a=document.getElementById("output").innerHTML=thehtml;
    }
    
}