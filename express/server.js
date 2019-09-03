const express = require('express');
const serverless = require('serverless-http');
const app = express();
const expressWs = require('express-ws')(app);
const mainRouter = require('./routes/mainRouter');

app.use(express.json());

app.use('/.netlify/functions/server', mainRouter);

app.use(express.static(__dirname + '/../'));

module.exports = { app, expressWs };
module.exports.handler = serverless(app);
