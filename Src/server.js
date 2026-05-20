const http = require("http");
const app = require("./app");

const { Server } = require("socket.io");

const setupLiveSocket = require("./sockets/liveSocket");

require("dotenv").config();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

setupLiveSocket(io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
