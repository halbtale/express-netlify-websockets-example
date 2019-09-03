module.exports = function(ws) {
    ws.on('message', message => {
        ws.send('Abbiamo ricevuto il tuo messaggio: ' + message);
    });
};
