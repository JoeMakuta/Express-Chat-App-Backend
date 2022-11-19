const express = require('express')
const homePage = require('../controllers/authentification/home')
const loginPage = require('../controllers/authentification/login')
const signUp = require('../controllers/authentification/signup')
const newConversation = require('../controllers/conversation/newConversation')
const findUsers = require('../controllers/users/findUsers')

const router = express.Router()

router.get('/', homePage)
router.post('/login', loginPage)
router.post('/signup', signUp)
// router.post('/message', )
router.post('/newConversation', newConversation)
findUsers
router.get('/users', findUsers)


// router.get('/signup', signUp)

module.exports = router;