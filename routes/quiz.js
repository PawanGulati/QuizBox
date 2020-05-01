const router = require('express').Router()

const control = require('../controllers')

const auth = require('../middleware/auth')
// show all quizzes and create one => '/api/quiz/'
router.route('/')
    .get(control.showQuizzes)
    .post(auth,control.createQuiz)

router.route('/user')
    .get(auth,control.showMyQuizzes)


// start a quiz and open it too => '/api/quiz/start/:id'
// router.route('/start/:id')
//     .get(control.startQuiz)

// end a quiz => '/api/quiz/end/:id'
router.route('/end/:id')
    .get(control.endQuiz)

//TODO: deleting or updating quiz will be added soon { Coming Soon ;) }  
// router.route('/:id')
//     .delete(control.deleteQuiz)
//     .patch(control.updateQuiz)


module.exports = router    
