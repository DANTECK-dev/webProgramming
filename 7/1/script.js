function SocketInitialize(form, elem, url) {
    let socket = new WebSocket(url);
    form.onsubmit = function () {
    let message = this.message.value;
    if (message) {
    this.message.value = '';
    socket.send(message);
    }
    return false;
    };
    socket.onmessage = function (event) {
    let messageElem = document.createElement('div');
    messageElem.textContent = event.data;
    elem.append(messageElem);
    }
    socket.onerror = function (error) {
    console.log(`[error] ${error.message}`);
    };
    }