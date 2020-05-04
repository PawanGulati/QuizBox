const {check} = require('express-validator')

exports.quizCreateValidation = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Quiz Name Required'),
    check('marks')
        .not()
        .isEmpty()
        .withMessage('Quiz Marks Required'),
    check('alloted_time')
        .not()
        .isEmpty()
        .withMessage('Quiz Alloted Time Required'),
    check('no_of_questions')
        .not()
        .isEmpty()
        .withMessage('Quiz No. of Question Required'),    
    check('no_of_questions').custom((value, { req }) => {
        if (value <= 0) {
            throw new Error('Give Valid no. of Questions');
        }else
            return true
    }),
    check('marks').custom((value, { req }) => {
        if (value <= 0) {
            throw new Error('Give Valid Marks');
        }else
            return true
    }),
    check('alloted_time').custom((value, { req }) => {
        if (value <= 0) {
            throw new Error('Give Valid Alloted Time');
        }else
            return true
    })
]