import express from "express";
import mongoose from "mongoose";
import router from "./routes/route.js";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import server from "http";

dotenv.config();

const PORT = 5000 || process.env.PORT;
const dbUrl = process.env.DBURI;
const frontedUrl = process.env.FRONTEND_URL;

//DB Connection
mongoose
  .connect(dbUrl)
  .then(() => console.log("DB Connexion succeded"))
  .catch((err) => console.log("An error occured", err));

// Express Application
const app = express();

// App middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use("/", router);

const httpServer = server.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: frontedUrl,
  },
});

//Socket IO
io.on("connection", (socket) => {
  console.log("User Connected : ", socket.id);

  socket.on("conversation", (conversation) => {
    socket.join(conversation);
    console.log("Join conversation : ", conversation);
  });

  socket.on("leave_conversation", (conversation) => {
    socket.leave(conversation);
    console.log("Left conversation : ", conversation);
  });

  socket.on("send_message", (message) => {
    socket.to(message.conversationId).emit("receive_message", message);
  });
});

// The application listens on port 5000

httpServer.listen(PORT, () => {
  console.log("====================================");
  console.log("The server started on http://localhost:" + PORT);
  console.log("====================================");
});

export default app;
