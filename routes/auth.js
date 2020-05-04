const router = require('express').Router()

const control = require('../controllers')

// addin' validators
const {signInValidator,signUpValidator} =  require('../validation/user')
const {runValidation} = require('../validation')


router.post('/register',signUpValidator,runValidation,control.signUp) //, signUpValidator, runValidation

router.post('/login', signInValidator, runValidation,control.signIn)

module.exports = router