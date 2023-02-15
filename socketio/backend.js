const http = require('http');
const { Server } = require('socket.io');

const httpServer = http.createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (ws) => {
  console.log('new client connected');

  ws.emit('chatMessage', 'Welcome to chat'); //відправляю повідомлення новому учаснику
  ws.broadcast.emit('chatMessage', 'new user connected'); //відправляю повідомлення всім іншим учасникам
  ws.on('chatMessage', (message) => {
    ws.broadcast.emit('chatMessage', message); //відправляю отримане від кор-ча повідомлення всім ін учасникам
  });
});

httpServer.listen(5000, () => {
  console.log('listening on port 5000');
});
