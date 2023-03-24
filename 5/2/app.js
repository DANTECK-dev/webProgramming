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

var arr=new Array("FENDER CD-60 BLACK","37 000","7","IBANEZ GRX70QA-TRB","35 000","3");

app.post("/getData",upload.fields([]),(request,response)=>{
    if(!request.body)
        return response.sendStatus(400);
   
    response.send(arr[request.body.data-1]);
});

var table=`<tr><td>Название</td><td>Цена</td><td>Количество</td></tr><tr><td>FENDER CD-60 BLACK</td><td>37 000</td><td>7</td></tr><tr><td>IBANEZ GRX70QA-TRB</td><td>35 000</td><td>3</td></tr>`

app.get("/getTable",(request,response)=>{
    response.send(table);
});

app.listen(3000,function(){
    console.log("Сервер запущен. Порт 3000")
});