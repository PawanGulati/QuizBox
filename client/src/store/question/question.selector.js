import {createSelector} from 'reselect'

// input selectors
const selectQuestion = state => state.ques

// output selectors
export const selectCurQues = createSelector(
    [selectQuestion],
    ques => ques.question
)