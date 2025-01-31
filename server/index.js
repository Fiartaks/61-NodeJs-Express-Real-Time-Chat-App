const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("Socket connected: ", socket.id);
  socket.on("room", (data) => {
    socket.join(data);
  });
  socket.on("message", (data) => {
    //io.to(data.room).emit("message", data);
    console.log(data,'adam')
  });
});

const PORT = 8001;
server.listen(PORT, () => {
  console.log("server is running on port :8001");
});
