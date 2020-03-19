const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app);
const connString = 'mongodb+srv://oministack:oministack333@cluster0-d1ws6.gcp.mongodb.net/week10?retryWrites=true&w=majority';

setupWebsocket(server);

mongoose.connect(connString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);