const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://mentorme-f3485.firebaseio.com"
});

const app = express();
const server = http.createServer(app);
const io = new Server(server);


io.on("connection", (socket) => {
  console.log("A user connected");


  socket.on("newChat", async (chatData) => {

    const chatRef = admin.firestore().collection("chats").doc(chatData.chatId);
    await chatRef.set(chatData);
    

    io.emit("chatAdded", chatData);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});


server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
