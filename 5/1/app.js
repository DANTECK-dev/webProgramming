const express = require("express");
const hbs=require("hbs");
const app = express();
const fs = require("fs");
const expressHbs=require("express-handlebars");
const bodyParser=require("body-parser");
const urlencodedParser=bodyParser.urlencoded({extended:false});
const multer=require("multer")
const upload=multer();

app.engine("hbs",expressHbs.engine({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname:"hbs"
}))
app.set("view engine","hbs");
hbs.registerPartials(__dirname+"/views/partials");

var nowDate = new Date();
app.use(function(request,response,next){
    console.log('Запрошенный адрес:'+ request.url+'\t'+nowDate);
    next();
});//Логи

app.use("/main",urlencodedParser,function(request,response){
    response.render("main");
});

app.post("/getData",upload.fields([]),(request,response)=>{
    if(!request.body)
        return response.sendStatus(400);
    fs.writeFile("data.txt", request.body.data, (error) =>{
        if(error) throw error;
        console.log("Запись файла завершена.");
    });
    response.send(request.body.data);
});

app.get("/data.txt",(request,response)=>{
    response.send(fs.readFileSync("data.txt", "utf8"));
});

app.listen(3000,function(){
    console.log("Сервер запущен. Порт 3000")
});