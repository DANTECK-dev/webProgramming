const http=require("http");
const fs=require("fs");
http.createServer(function(request,response){
    response.setHeader("Content-Type","text/html; charset=utf-8;");
    if(request.url==="/"||request.url==="/home")
    {
        response.write("<h1>Главная старница</h1>");
    }
    else if(request.url=="/data")
    {
        let fileContent = fs.readFileSync("c:/webProgramming/2/general/1/data.txt", "utf8");
        response.write(fileContent);
    }
    else if(request.url=="/contact")
    {
        response.write("<p color=rgb(137,99,"+Math.floor(Math.random() * 256)+")>Выполнил: Жилин Д.Е.</p>");
    }
    else{
        response.write("Страница не найдена");
    }
    response.end();
}).listen(3000);