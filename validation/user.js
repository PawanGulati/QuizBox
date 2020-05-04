const {check} = require('express-validator')

//This validator will throw an Error as array of objects if there is any 
exports.signUpValidator = [
    check('userName')
        .not()
        .isEmpty()
        .withMessage('Name field required'),
    check('email')
        .not()
        .isEmpty()
        .withMessage('Email field required'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Password field required'),
    check('email')
        .isEmail()
        .withMessage('Not a valid mail'),
    check('password')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
        .withMessage('Password should be combination of one uppercase , one lower case, one special char, one digit ') 
]

exports.signInValidator = [
    check('email')
        .not()
        .isEmpty()
        .withMessage('Email field required'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Password field required'),
    check('email')
        .isEmail()
        .withMessage('Not a valid mail'),
]