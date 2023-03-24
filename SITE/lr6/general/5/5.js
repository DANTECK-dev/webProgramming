function out()
{
    var rnd=Math.floor(Math.random() * 100);

    var input=-1;
    var x = Boolean(false);

    while(input!==rnd)
    {
        if(x==false)
        {
            input=parseInt(prompt("Введите число"));
            x=true;
        }
        else
        {
            if(input<rnd)
            {
                input=parseInt(prompt("Больше"));
            }
            else if(input>rnd)
            {
                input=parseInt(prompt("Меньше"));
            }
        }
        document.write('<div>'+input+'</div>')
    }
}