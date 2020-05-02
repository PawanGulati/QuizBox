import {createSelector} from 'reselect'

// input selectors
const selectQuiz = state => state.selectQuiz

// output selectors
const selectQuizzes = createSelector(
    [selectQuiz],
    quiz => quiz.quizzes
)

const selectCurQuiz = createSelector(
    [selectQuiz],
    quiz => quiz.quiz
)

const selectQuizCount = createSelector(
    [selectQuizzes],
    quizzes => quizzes.length
)