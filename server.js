const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const PORT = 5000 || process.env.PORT
const dbUrl = process.env.DBURI

//DB Connection
mongoose.connect(dbUrl)
   .then(() => console.log("DB Connexion succeded"))
   .catch((err) => console.log("An error occured", err))


const app = express();
app
   .use('/', (req, res) => {
      res.json({ message: "Hello world ..." })
   })
   .listen(PORT)
