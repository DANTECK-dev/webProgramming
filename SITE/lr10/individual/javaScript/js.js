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

function updateTime()
{
    let tmp=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
    document.getElementById("time").innerHTML= tmp;
}

setInterval(updateTime,1000);

var description=new Array();
description[0]="Главная страница содержит информацию о других страницах";
description[1]="Медведи - здесь предоставлена информация о медведях";
description[2]="Парнокопытные - здесь предоставлена информация о парнокопытных";
description[3]="Псовые - здесь предоставлена информация о псовых";
description[4]="Грызуны - здесь предоставлена информация о грызунач";

var indexOfDescription=-1;

function createDescription()
{
    indexOfDescription++;
    if(indexOfDescription==5)
    {
        indexOfDescription=0;
    }
    document.getElementById('pageDescription').innerHTML=description[indexOfDescription];
}

setInterval(createDescription,10000);

document.getElementById('rndclr').style.backgroundColor =getRandomRGB(255);
document.getElementById('pageDescription').style.backgroundColor =getRandomRGB(255);

function createAdvertising() {
    var advert=document.getElementById("advertising");
    advert.style.position="fixed"
    advert.style.left="300px";
    advert.style.top="200px";
    advert.style.backgroundColor =getRandomRGB(255)
    //advert.style.width="calc(100%-600px)"
    advert.style.width="700px"
    advert.style.height=500+"px";
    advert.style.margin=25+'px';
    advert.innerText="Реклама!!!"
    advert.style.textAlign="center"
    var newButton=document.createElement("button");
    newButton.innerText="X"
    newButton.style.float="right"
    newButton.style.width=30+'px';
    newButton.style.height=30+'px';
    newButton.setAttribute("onclick","rmv()");
    advert.appendChild(newButton);

}

function rmv()
{
    document.getElementById("advertising").remove();
}

setInterval(createAdvertising,5000);

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

function addcontent()
{
    var newTable=document.createElement("table");
    var newTr=document.createElement("tr");
    var newTd=document.createElement("td")
    newTd.innerHTML=prompt("Введите название",)
    newTr.appendChild(newTd)

    newTd=document.createElement("td")
    var newImg=document.createElement("img")
    newImg.setAttribute("src",prompt("Введите ссылку на картинку",));
    newTd.appendChild(newImg)
    newTr.appendChild(newTd)

    newTd=document.createElement("td")
    newTd.innerHTML=prompt("Введите описание",)
    newTr.appendChild(newTd)

    newTd=document.createElement("td")
    var NewA=document.createElement("a")
    NewA.setAttribute("href",prompt("Введите ссылку на википедию","target","-blank"))
    NewA.innerText="Википедия";
    newTd.appendChild(NewA)
    newTr.appendChild(newTd)

    newTable.appendChild(newTr);
    document.getElementById("userTable").appendChild(newTable);
}

function buttonClick() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function buttonClick2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}