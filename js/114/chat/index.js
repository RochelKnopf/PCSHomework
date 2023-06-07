const express = require('express');
const http = require('http');
const io = require('socket.io');
const path = require('path');

const app = express();

const server = http.createServer(app);
const socketIo = io(server);

app.use(express.static(path.join(__dirname, 'public')));

let chatters = [];

socketIo.on('connection', socket => {
  let name;
  socket.on('login', (n, callback) => {
    if (chatters.find(c => c === n)) {
      return callback(`duplicate login ${n}`);
    }
    callback();

    name = n;
    chatters.push(name);

    socket.broadcast.emit('info', {join: name});

    socket.on('msg', msg => {
      // socket.broadcast.emit('msg', msg);
      socketIo.emit('msg', { name, msg });
    });

    socket.on('disconnect', () => {
      chatters = chatters.filter(c => c !== name);
      socket.broadcast.emit('info', { leave: name });
    });
  });
});

app.get('/', (req, res, next) => {
  res.end('hello world');
});

server.listen(80);
