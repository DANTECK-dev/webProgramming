const http = require('http');
const url = require('url');
// для отправки статических страниц
const static = require('node-static');
var fileServer = new static.Server('.');

var subscribers = {};

// регистрация запросов
function onSubscribe(request, response) {
    var id = Math.random(); // генерируем идентификатор клиента
    // подготавливаем и запоминаем ответ, но не отправляем
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    response.setHeader("Cache-Control", "no-cache, must-revalidate");
    subscribers[id] = response; // объект ответа сохранен
    console.log("Новый клиент " + id + ", клиентов:" +
    Object.keys(subscribers).length);
    // если запрос прервется до отправки ответа
    request.on('close', function() {
    delete subscribers[id];
    console.log("Клиент "+id+" отсоединился, клиентов:" +
    Object.keys(subscribers).length);
    });
    }

    // рассылка новых сообщений
function publish(message) {
    //отсылаем сообщения всем клиентам
    for (var id in subscribers) {
    var response = subscribers[id];
    response.end(message); // завершаем запрос с ответом
    }
    subscribers = {}; // очищаем список клиентов
    }

    http.createServer(function (request, response) {
        var urlParsed = url.parse(request.url, true); // получаем url
        // новый клиент - запрос на адрес /subscribe
        if (urlParsed.pathname == '/subscribe') {
        onSubscribe(request, response); // регистрация клиента в массиве
        } else
        // отправка сообщения - запрос на адрес /publish
        if (urlParsed.pathname == '/publish' && request.method == 'POST'){
        var message = '';
        // принять текст запроса
        request.on('data', function(chunk) {
        message += chunk;
        }).on('end', function() {
        let time = new Date().toLocaleTimeString(); // время
        publish(time + " > " + message); // рассылка сообщения
        response.end();
        });
        } else
        // отправка статических страниц
        fileServer.serve(request, response);
        9
        }
        ).listen(3000, function(){
        console.log('Сервер запущен на порту 3000');
        });