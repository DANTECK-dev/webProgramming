
module.exports=function(max){
    var result=new Array();
    var size= max;
    var arr=["Junior-dev","Middle-dev","Senior-dev","Team-Lead"];
    const Employee=require("./worker.js");
    for(let i=0;i<size;i++)
    {
        result[i]=new Employee(arr[Math.floor(Math.random() * 4)],Math.floor(Math.random() * 8));
    }
    return result;
}