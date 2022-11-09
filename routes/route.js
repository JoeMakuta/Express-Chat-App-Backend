const express = require('express')
const homePage = require('../controllers/authentification/home')
const loginPage = require('../controllers/authentification/login')
const signUp = require('../controllers/authentification/signup')

const router = express.Router()

router.get('/', homePage)
router.get('/login', loginPage)
router.post('/signup', signUp)
// router.get('/signup', signUp)

module.exports = router;