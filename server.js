const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('chat message', msg => {
    io.emit('chat message', msg); // broadcast to everyone
  });
});

server.listen(3000, () => {
  console.log('server running on http://localhost:3000');
});
