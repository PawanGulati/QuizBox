const {check} = require('express-validator')

exports.quizCreateValidation = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Quiz Name Required'),
    check('no_of_questions').custom((value, { req }) => {
        if (value <= 0) {
            throw new Error('Give Valid no. of Questions');
        }else
            return true
    })
]