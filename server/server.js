const express = require('express');
const bodyParser = require('body-parser');
const {Server} = require('socket.io');

const port = 4000;

const io = new Server();
const app = express();

app.use(bodyParser.json());

io.on('connection', (socket) => {

});

app.listen(port, () => console.log(`HTTP server running on port ${port}`));
io.listen(4001);