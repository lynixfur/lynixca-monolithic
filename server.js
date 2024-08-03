const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

let connectedClients = 0;

wss.on('connection', (ws) => {
  connectedClients++;
  console.log(`New connection. Total clients: ${connectedClients}`);

  // Send the number of connected clients to the new client
  ws.send(JSON.stringify({ connectedClients }));

  // Broadcast updated client count to all connected clients when one disconnects
  ws.on('close', () => {
    connectedClients--;
    console.log(`Connection closed. Total clients: ${connectedClients}`);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ connectedClients }));
      }
    });
  });
});

server.listen(8080, () => {
  console.log('WebSocket server is listening on ws://localhost:8080');
});
