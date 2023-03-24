
function addList()
{
    var parent = document.getElementsByTagName("ul")[0];
    var li = document.createElement("li");
    li.setAttribute("onclick","nw(this)");
    li.innerText="Новый";
    parent.appendChild(li)
}

function nw(elem)
{
    if(elem.innerText=="Новый")
    {
        elem.innerText="Старый";
    }
    else if( elem.innerText=="Старый")
    {
        elem.innerText="Очень старый";
    }
    else if( elem.innerText="Очень старый")
    {
        elem.remove();
    }
}