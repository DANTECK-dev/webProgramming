// Инициализация формы - обычные XHR POST запросы
function FormInitialize(form, url) {
    // функция отсылки данных - простейший ajax-запрос
    function sendMessage(message) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.send(message);
    }
    // установка обработчика для отправки данных
    form.onsubmit = function() {
    let message = form.message.value;
    if (message) {
    form.message.value = '';
    sendMessage(message); // POST-запрос
    }
    return false; // отменяем стандартную отправку
    };
    }

    // Получение сообщений - COMET
function SubscribePanel(elem, url) {
    // добавление текста сообщения в div
    function showMessage(message) {
    let messageElem = document.createElement('div');
    messageElem.textContent = message;
    elem.appendChild(messageElem);
    }
    // отправка запроса для регистрации на сервере
    function subscribe() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
    if (this.status == 200) {
    if (this.responseText) {
    // отображение сообщения на странице
    showMessage(this.responseText);
    }
    subscribe(); // повторное соединение
    return;
    }
    if (this.status != 502) {
    // 502 - прокси ждал слишком долго, надо пересоединиться
    // в остальных случаях отображаем ошибку
    showMessage(this.statusText);
    }
    setTimeout(subscribe, 1000); // повторное соединение
    }
    xhr.open("GET", url, true);
    xhr.send();
    }
    // запуск первого запроса на соединение
    subscribe();
    }
    