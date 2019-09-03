const ws = new WebSocket(
    `ws://${location.hostname + (location.port ? ':' + location.port : '')}/.netlify/functions/server`
);
ws.onopen = () => {
    ws.send('Hello Server');
};
ws.onmessage = message => {
    content.insertAdjacentHTML('afterbegin', `<p>${message.data}</p>`);
};

setTimeout(() => {
    ws.close();
}, 10 * 1000);
