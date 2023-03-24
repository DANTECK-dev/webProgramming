function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}
function getRandomRGB()
{
    return "rgb("+getRandomInt(255)+","+getRandomInt(255)+"," +getRandomInt(255)+")";
}

function createDiv()
{
    var newDiv=document.createElement("div");

    newDiv.appendChild(document.createElement("img"));
    newDiv.appendChild(document.createElement("p"));

    return newDiv;
}

var img=new Array();
    img[0]="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    img[1]="https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg=";
    img[2]="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
    img[3]="https://i.gifer.com/origin/fa/fa9e27a7534060df383ab54354fcead3.gif"

var suggestions=new Array();
    suggestions[0]="Постоянный количественный рост и сфера нашей активности обеспечивает актуальность системы масштабного изменения ряда параметров. ";
    suggestions[1]="Соображения высшего порядка, а также курс на социально-ориентированный национальный проект требует от нас анализа системы масштабного изменения ряда параметров. ";
    suggestions[2]="Дорогие друзья, повышение уровня гражданского сознания требует определения и уточнения системы обучения кадров, соответствующей насущным потребностям. ";
    suggestions[3]="Таким образом, консультация с профессионалами из IT представляет собой интересный эксперимент проверки системы обучения кадров, соответствующей насущным потребностям. ";
    suggestions[4]="Значимость этих проблем настолько очевидна, что консультация с профессионалами из IT играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач! ";

function createContent(elem,K,Kpr)
{
    var post=new Array();

    for(let i=0;i<K;i++)
    {
        post[i]=elem.cloneNode(true)
        
        post[i].style.color=getRandomRGB();
        post[i].style.background=getRandomRGB();
        post[i].firstChild.src=img[getRandomInt(4)];

        var text="";
        for(let j=0;j<Kpr;j++)
        {
            text+=suggestions[getRandomInt(5)];
        }

        post[i].lastChild.innerHTML=text;
    }
    return post;
}

var K=prompt("Введите количество постов",);
var Kpr=prompt("Введите количество предложений",);
var tmpArr;
tmpArr=createContent(createDiv(),K,Kpr);

for(let i=0;i<K;i++)
{
    document.body.appendChild(tmpArr[i]);
}