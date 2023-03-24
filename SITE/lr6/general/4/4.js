var arr=new Array();

function out()
{
    for(let i=0;i<5;i++)
    {
        var x=parseInt(prompt("Введите число",0));
        arr.push(x);
    }
    document.getElementById('out').innerHTML=arr;
}