const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

let connectedClients = 0;

// Function to broadcast the number of connected clients to all clients
const broadcastClientCount = () => {
  const message = JSON.stringify({ connectedClients });
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
};

wss.on('connection', (ws) => {
  connectedClients++;
  console.log(`New connection. Total clients: ${connectedClients}`);

  // Send the current number of connected clients to the new client
  ws.send(JSON.stringify({ connectedClients }));

  // Broadcast the updated client count to all clients
  broadcastClientCount();

  // Handle the closing of the connection
  ws.on('close', () => {
    connectedClients--;
    console.log(`Connection closed. Total clients: ${connectedClients}`);
    
    // Broadcast the updated client count to all clients
    broadcastClientCount();
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`WebSocket server is listening on ws://localhost:${PORT}`);
});
