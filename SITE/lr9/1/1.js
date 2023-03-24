function createDiv(value)
{
    return "<div class="+"timer"+" id="+value+"></div>"
}

var arr=new Array("rgb(50, 255, 0)","rgb(100, 255, 0)","rgb(150, 255, 50)","rgb(100, 255, 100)","rgb(50, 255, 150)");

document.write(createDiv("one"));
document.write(createDiv("two"));
document.write(createDiv("three"));
document.write(createDiv("four"));
document.write(createDiv("five"));

function color(value1,value2,value3,value4,value5)
{
    document.getElementById("one").style.backgroundColor =arr[value1];
    document.getElementById("two").style.backgroundColor=arr[value2];
    document.getElementById("three").style.backgroundColor=arr[value3];
    document.getElementById("four").style.backgroundColor=arr[value4];
    document.getElementById("five").style.backgroundColor=arr[value5];
}

class Tme{
    value=0;
    set setValue(value)
    {
        this.value=value;
    }
    get getValue()
    {
        return this.value;
    }
}

var time=new Tme;

function check(value)
{
    var result=value;
    if(value>=5)
    {
        result=value-5;
    }
    return result;
}

function updateTime()
{
    document.getElementsByClassName("timer").innerHTML=new Date().toTimeString();

    color(check(time.getValue),check(time.getValue+1),check(time.getValue+2),check(time.getValue+3),check(time.getValue+4));
    time.setValue=time.getValue+1;

    if(time.getValue>=5)
    {
        time.setValue=0;
    }
}
setInterval(updateTime,1000);