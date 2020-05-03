import {createSelector} from 'reselect'

// input selectors
const selectQuiz = state => state.quiz

// output selectors
export const selectQuizzes = createSelector(
    [selectQuiz],
    quiz => quiz.quizzes
)

export const selectCurQuiz = createSelector(
    [selectQuiz],
    quiz => quiz.quiz
)

export const selectQuizCount = createSelector(
    [selectQuizzes],
    quizzes => quizzes.length
)