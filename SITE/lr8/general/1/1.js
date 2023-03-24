var week={};
week.ru=new Array("Понедельник ","Вторник ","Среда ","Четверг ","Пятница ","Суббота ","Воскресенье ");
week.en=new Array("Monday ","Tuesday ","Wednesday ","Thursday ","Friday ","Saturday ","Sunday ");

function getWeek()
{
    if(confirm("Отобразить список дней недели на английском?"))
    {
        document.write(week.en);
    }
    else
    {
        for(let i=0;i<7;i++)
        {
            document.write(week.ru[i]);
        }
    }
}

getWeek();