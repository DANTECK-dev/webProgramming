
var size=process.argv[2];
if(isNaN(size))
{
	size=1;
}

    const fu=require("./data.js");
    var res=fu(size);
    
    for(let i=0;i<res.length;i++)
    {
        res[i].prnt();
    }