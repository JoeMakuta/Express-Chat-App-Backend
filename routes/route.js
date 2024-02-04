import express from "express";
import homePage from "../controllers/authentification/home.js";
import loginPage from "../controllers/authentification/login.js";
import signUp from "../controllers/authentification/signup.js";
import getConversation from "../controllers/conversation/getConversation.js";
import newConversation from "../controllers/conversation/newConversation.js";
import getMessages from "../controllers/message/getMessages.js";
import newMessage from "../controllers/message/newMessage.js";
import tokenAuth from "../controllers/middleware/tokenAuth.js";
import findUsers from "../controllers/users/findUsers.js";

const router = express.Router();

router.get("/", homePage);
router.post("/login", loginPage);
router.post("/signup", signUp);
router.get("/users", tokenAuth, findUsers);

router.post("/newConversation", tokenAuth, newConversation);
router.get("/getConversation/:userId", tokenAuth, getConversation);

router.post("/newMessage/:conversationId", tokenAuth, newMessage);
router.get("/getMessages/:conversationId", tokenAuth, getMessages);

export default router;
