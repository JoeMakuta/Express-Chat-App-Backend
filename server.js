const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/route")
require("dotenv").config()

const PORT = 5000 || process.env.PORT
const dbUrl = process.env.DBURI

//DB Connection
mongoose.connect(dbUrl)
   .then(() => console.log("DB Connexion succeded"))
   .catch((err) => console.log("An error occured", err))

// Express Application
const app = express();
app.use('/', router)
   .listen(PORT)
