const express = require("express");
const fs=require("fs");
const app = express();

app.use(function(request,response,next){
let now=new Date().toLocaleDateString();
let data=`${now} ${request.method} ${request.url} + ${request.get("user-agent")}`;
console.log(data);
fs.appendFile("c:/webProgramming/3/3/server.log",data+'\n',function(){});
next();
});

app.use("/home/?(.html)?(.php)?",function(request,response){
    response.redirect("index.html");
});
app.use("/main/?(.html)?(.php)?",function(request,response){
    response.redirect("index.html");
});
app.use("/index/?(.html?)?(.php)?", function(request, response){
    app.use(express.static(__dirname));
});

app.use("/content/?(.html?)?(.php)?", function(request, response){
    app.use(express.static(__dirname));
});

app.use("/info/?(.html?)?(.php)?", function(request, response){
    app.use(express.static(__dirname));
});

app.listen(3000,function(){
    console.log("Сервер запущен. Порт 3000")
});
