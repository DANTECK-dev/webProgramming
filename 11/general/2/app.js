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
    
    app.post("/getData",urlencodedParser,function(request,response){
        if(!request.body) return response.sendstatus(400);
        response.send(
            `<button style={buttonStyle}><Link to="/rock"><Music name="rock" src="asfs" description="safasffas" /></Link></button><br></br>
            <button style={buttonStyle}><Link to="/pop"><Music name="rock" src="asfs" description="safasffas" /></Link></button><br></br>
            <button style={buttonStyle}><Link to="/metal"><Music name="rock" src="asfs" description="safasffas" /></Link></button>`
        );
    });

    app.listen(3000,function(){
        console.log("Сервер запущен. Порт 3000")
    });
