import {createSelector} from 'reselect'

// input selectors
const selectQuesState = state = state.ques

// output selectors
export const selectQuestion = createSelector(
    [selectQuesState],
    ques => ques.question
)