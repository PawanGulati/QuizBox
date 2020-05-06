import {createSelector} from 'reselect'

// input selectors
const selectQuestion = state => state.ques

// output selectors
export const selectCurQues = createSelector(
    [selectQuestion],
    ques => ques.question
)

export const selectQuestions = createSelector(
    [selectQuestion],
    ques => ques.questions
)

export const selectCurQuesNo = createSelector(
    [selectQuestion],
    ques => ques.cur_ques_no
)