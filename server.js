const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/route")
const cors = require('cors')
require("dotenv").config()
const socketio = require('socket.io')
const http = require('http')

const PORT = 5000 || process.env.PORT
const dbUrl = process.env.DBURI

//DB Connection
mongoose.connect(dbUrl)
   .then(() => console.log("DB Connexion succeded"))
   .catch((err) => console.log("An error occured", err))

// Express Application
const app = express();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Credentials', true)
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
});
app.use('/', router)

//Create an http server to access socket io
const httpServer = http.createServer(app).listen(PORT)

//Create a socket io object
const io = socketio(httpServer, {
   cors: {
      origin: "*",
   }
})

io.on('connection', (socket) => {
   console.log('A user is connected ...');
   socket.emit('message', () => {
      console.log('A user just sent a message ...');
   })
})

module.exports = io
