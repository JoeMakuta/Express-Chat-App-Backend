const express = require('express')
const homePage = require('../controllers/authentification/home')
const loginPage = require('../controllers/authentification/login')
const signUp = require('../controllers/authentification/signup')
const getConversation = require('../controllers/conversation/getConversation')
const newConversation = require('../controllers/conversation/newConversation')
const getMessages = require('../controllers/message/getMessages')
const newMessage = require('../controllers/message/newMessage')
const findUsers = require('../controllers/users/findUsers')

const router = express.Router()

// router.get('/', homePage)
router.post('/login', loginPage)
router.post('/signup', signUp)
router.get('/users', findUsers)

router.post('/newConversation', newConversation)
router.get('/getConversation/:userId', getConversation)

router.post('/newMessage', newMessage)
router.get('/getMessages/:conversationId', getMessages)

module.exports = router;