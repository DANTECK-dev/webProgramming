function redact(str)
{
    var parent = document.getElementsByTagName("ol")[0];
    
    str=str.trim();
    str=str.replaceAll("1","один");
    str=str.replaceAll("2","два");
    str=str.replaceAll("3","три");
    str=str.replaceAll("4","четыре");
    str=str.replaceAll("5","пять");
    str=str.replaceAll("6","шесть");
    str=str.replaceAll("7","семь");
    str=str.replaceAll("8","восемь");
    str=str.replaceAll("9","девять");
    str=str.replaceAll("0","ноль");

    if(/[А-Я]/.test(str.substring(0,1)))
    {
        str=str.toUpperCase();
    }
    const add=`<li> ${str}</li>`;
    parent.innerHTML=add;
    console.log(str)
}

function inp()
{
    const str=document.getElementById("input").value;
    const add=`<li> ${str}</li>`;
    console.log(str)
    var parent = document.getElementsByTagName("ul")[0];
    parent.innerHTML=add;
    redact(str);
}