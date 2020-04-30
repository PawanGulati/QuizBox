const router = require('express').Router()

const control = require('../controllers')


router.post('/register',control.signUp)

router.post('/login',control.signIn)

module.exports = router