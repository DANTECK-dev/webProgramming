const fs = require("fs");
const express = require("express");
const app = express();
const path = require('path');
const bodyParser=require("body-parser");
const urlencodedParser=bodyParser.urlencoded({extended:false});

    var Data = new Date();
    app.use(function(request,response,next){
        console.log('Запрошенный адрес:'+ request.url+'\t'+Data);
        next();
    });//Логи
    
    app.use(express.static(path.join(__dirname, 'public')));

    app.use("/index",urlencodedParser,function(request,response){
        fs.readFile("index.html", function(error, data){
            response.end(data);
            });
    });
    

    app.listen(3000,function(){
        console.log("Сервер запущен. Порт 3000")
    });
