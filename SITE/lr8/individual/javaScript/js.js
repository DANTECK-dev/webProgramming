function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}
function getRandomRGB()
{
    return "rgb("+getRandomInt(255)+","+getRandomInt(255)+"," +getRandomInt(255)+")";
}

document.getElementById("date").innerHTML=new Date().toLocaleDateString();

var time=new Date();
if((time.getMinutes()%2)==0){
    document.getElementById("hdr").innerHTML="Каталог лесных зверей";
}
else
{
    document.getElementById("hdr").innerHTML="Лесные звери";
}

document.getElementById('rndclr').style.backgroundColor =getRandomRGB(255);

class Link{
    constructor(page,linkText,help,className)
    {
        this.page=page;
        this.linkText=linkText;
        this.help=help;
        this.className=className;
    }

    get getLink()
    {
        return "<a href="+this.page+" class="+this.className+" title="+this.help+" >"+this.linkText+"</a>"
    }
    get getName()
    {
        return this.linkText;
    }
}

var arr=new Array();

arr[0]=new Link("Bears.html","Медведи","bears","bears");
arr[1]=new Link("Main.html","Главная страница","main","main");
arr[2]=new Link("Artiodactyls.html","Парнокопытные","artiodactyls","artiodactyls");
arr[3]=new Link("Dogs.html","Псовые","dogs","dogs");
arr[4]=new Link("Rodents.html","Грызуны","rodents","rodents");

document.getElementById('rndLink').innerHTML=arr[getRandomInt(5)].getLink;

class List{
    constructor(name,value)
    {
        this.name=name;
        this.value=value;
    }

    get elements()
    {
        return "<tr><td>"+this.name+"</td><td>"+this.value+"</td></tr>"
    }
    
}

var tableArray=new Array();

var result="<table class="+"someTable"+"><tr><th>Наименование</th><th>Количество на сайте</th></tr>";
for(let i=0;i<5;i++)
{
    if(i!=1)
    {
    tableArray[i]=new List(arr[i].getName,2);
    result+=tableArray[i].elements;
    }
}
result+="</table>";
document.getElementById('someTable').innerHTML=result;