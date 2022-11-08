const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const PORT = 5000 || process.env.PORT

const app = express();
app
   .use('/', (req, res) => {
      res.send('Hello world ...')
   })
   .listen(PORT)
