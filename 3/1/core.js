const express = require("express");
const app = express();
let Data = new Date();

function navigation () {
    return `
        <a href='./'>/</a>
        <br>
        <a href='./home'>home</a>
        <br>
        <a href='./contact.html'>Contact</a>
    `
}

app.use(function(request,response,next){
    console.log('Запрошенный адрес:'+ request.url+'\t'+Data);
    next();
});
app.use("/home(.html)?",function(request,response){
    response.redirect("/");
});
app.get("/", function(request, response){
    response.send("<h1>Главная страница</h1></br>" + navigation());
   });
app.get("/contact(.html)?", function(request, response){
 response.send(`<p style='color: rgb(${Math.round(Math.random()*256)},${Math.round(Math.random()*256)},${Math.round(Math.random()*256)});'>Немеров</p><br>` + navigation());
});
app.get("/*", function(request, response){
    response.status(404).send("<p style='font-size:"+Math.round(Math.random()*5)+10+"px;'>Page not found</p>" + navigation());
});
app.listen(3000,function(){
    console.log("Сервер запущен. Порт 3000")
});