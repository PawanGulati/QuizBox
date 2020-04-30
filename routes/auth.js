const Router = require('express').Router()

const control = require('../controllers')

Router.post('/register',control.signUp)
Router.post('/login',control.signIp)

module.exports = Router