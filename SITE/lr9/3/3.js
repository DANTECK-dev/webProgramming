function createList(value)
{
    var newUl=document.createElement("ul");
    for(let i=0;i<value.length;i++)
    {
        let a=document.createElement("li");
        a.innerHTML=value[i];
        newUl.appendChild(a);
    }
    return newUl;
}

var arr=new Array();

while(true)
{
    let x=prompt("Введите элемент списка",);
    if(x=="")
    {
        break;
    }
    else
    {
        arr.push(x);
    }
}

document.body.appendChild(createList(arr));
