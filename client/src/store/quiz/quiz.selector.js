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

export const selectQuizError = createSelector(
    [selectQuiz],
    quiz => quiz.error
)

export const selectQuizCount = createSelector(
    [selectQuizzes],
    quizzes => quizzes.length
)

// this selector is for opening error snackbar 
export const selectQuizErrCompOpen = createSelector(
    [selectQuiz],
    quiz => quiz.openErrComp
)
