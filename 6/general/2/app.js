const express = require("express");
const hbs=require("hbs");
const app = express();
const expressHbs=require("express-handlebars");
const bodyParser=require("body-parser");
const path = require('path');
const urlencodedParser=bodyParser.urlencoded({extended:false});


app.engine("hbs",expressHbs.engine({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname:"hbs"
}));

app.set("view engine","hbs");
hbs.registerPartials(__dirname+"/views/partials");

app.use(express.static(path.join(__dirname, '/scripts')));

var nowDate = new Date();
app.use(function(request,response,next){
    console.log('Запрошенный адрес:'+ request.url+'\t'+nowDate);
    next();
});//Логи

app.use("/main",urlencodedParser,function(request,response){
    response.render("main");
});

app.listen(3000,function(){
    console.log("Сервер запущен. Порт 3000")
});