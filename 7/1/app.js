const http = require('http');
const fs = require('fs');
const ws = new require('ws');
const wss = new ws.Server({noServer: true});
const clients = new Set();

function onConnect(ws) {
    
    clients.add(ws);
    var name=Math.floor(Math.random() * 10);
    console.log("Клиент "+name +" присоединился, клиентов:" + clients.size);
    ws.on('message', function(message) {
    message = message.slice(0, 50);
    let time = new Date().toLocaleTimeString();
    for(let client of clients) {
    client.send(name +" | "+ time+ " > " + message);
    }
    });
    ws.on('close', function() {
    clients.delete(ws);
    console.log("Клиент отсоединился, клиентов:" + clients.size);
    });
    }

    http.createServer((request, response) => {
        if(request.url == "/index.html" || request.url == "/script.js")
        fs.createReadStream(request.url.substring(1)).pipe(response);
        else{
        if (!request.headers.upgrade ||
        request.headers.upgrade.toLowerCase() != 'websocket'){
        response.end();
        return;
        }
        wss.handleUpgrade(request, request.socket, Buffer.alloc(0),onConnect);
        }
        }).listen(3000, function(){
        console.log('Сервер запущен на порту 3000');
        });