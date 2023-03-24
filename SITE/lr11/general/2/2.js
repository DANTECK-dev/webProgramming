function right()
{
    var parent = document.getElementsByTagName("div")[0];
    const text=document.getElementsByTagName("textArea")[0].value;
    const tmp=text.split('\n');

    for(let i=0;i<tmp.length;i++)
    {
        if(/([A-Z])/.test(tmp[i].substr(0,1)) || /[А-Я]/.test(tmp[i].substr(0,1)) && /./.test(tmp[i].substr(tmp[i].length-1, tmp[i].length)))
        {
            let x=document.createElement("p");
            x.innerText=tmp[i];
            parent.appendChild(x);  
        }
    }
    let x=document.createElement("p");
    x.innerText="------------------"
    parent.appendChild(x);  
}

function findNumbers()
{
    var parent = document.getElementsByTagName("div")[0];
    const text=document.getElementsByTagName("textArea")[0].value;

    let x=document.createElement("p");
    x.innerText=text.replace(/\d+/g,"NUMBER");
    parent.appendChild(x);  
    
    x=document.createElement("p");
    x.innerText="------------------"
    parent.appendChild(x);
}

function search()
{
    var parent = document.getElementsByTagName("div")[0];
    const text=document.getElementsByTagName("textArea")[0].value;

    const symbols=new RegExp("[^"+prompt("Введите символы")+"]","ig")
    console.log(symbols)
    const tmp=text.split(/\s/);

    for(let i=0;i<tmp.length;i++)
    {
        if(!symbols.test(tmp[i]))
        {
            let x=document.createElement("p");
            x.innerText=tmp[i];
            parent.appendChild(x);  
        }
    }

    let x=document.createElement("p");
    x.innerText="------------------"
    parent.appendChild(x);  

}

function findFirst()
{
    var parent = document.getElementsByTagName("div")[0];
    const text=document.getElementsByTagName("textArea")[0].value;
    const tmp=text.split('\n');

    for(let i=0;i<tmp.length;i++)
    {
        let y=tmp[i].split(/\s/);
        let x=document.createElement("p");
        x.innerText=y[0];
        parent.appendChild(x);  
    }
    let x=document.createElement("p");
    x.innerText="------------------"
    parent.appendChild(x);  
}