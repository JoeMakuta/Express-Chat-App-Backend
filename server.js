import express from "express";
import mongoose from "mongoose";
import router from "./routes/route.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = 5000 || process.env.PORT;
const dbUrl = process.env.DBURI;

//DB Connection
mongoose
  .connect(dbUrl)
  .then(() => console.log("DB Connexion succeded"))
  .catch((err) => console.log("An error occured", err));

// Express Application
const app = express();
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

app.listen(PORT, () => {
  console.log("====================================");
  console.log("The server started on http://localhost:" + PORT);
  console.log("====================================");
});

export default app;
