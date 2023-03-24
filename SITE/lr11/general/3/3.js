function prs()
{
    const text=document.getElementsByTagName("textArea")[0].value;
    let pars=JSON.parse(text);
    var parent = document.getElementsByTagName("div")[0];

    if(Array.isArray(pars))
    {
        let x=document.createElement("ul");

        for(let i=0;i<pars.length;i++)
        {
            let y=document.createElement("li")
            y.innerHTML=pars[i];
            x.appendChild(y);
        }
        parent.appendChild(x);  
    }
    else if(typeof pars == 'object')
    {
        let x=document.createElement("table");
        x.style.border='3px black solid'
        x.style.textAlign="Center"
        for (var name in pars){
            let tr=document.createElement("tr");
            
            let tmpKey=document.createElement("td");
            let tmpValue=document.createElement("td");
            tmpKey.innerHTML=name
            tmpValue.innerHTML=pars[name]
            tmpKey.style.border='3px black solid'
            tmpValue.style.border='3px black solid'
            tr.appendChild(tmpKey);
            tr.appendChild(tmpValue);
            x.appendChild(tr);
          }

        parent.appendChild(x);  
    }
}
