import {SET_QUESTION,SET_QUESTIONS,QUES_FAIL} from './question.types'

import api from '../../services/api/api'

export const set_question = ques =>({
    type:SET_QUESTION,
    ques
})

export const set_questions = quess =>({
    type:SET_QUESTIONS,
    quess
})

export const ques_fail = error =>({
    type:QUES_FAIL,
    error
})

export const createQues = (quizID,data) =>{
    return async dispatch =>{
        try {
            const ques = await api.call('post',`quiz/${quizID}/question/`,data)

            dispatch(set_question(ques))    
        } catch (err) {
            const {error} = err.response.data
            dispatch(ques_fail(error))           
        }
    }
}

export const updateQues = (quizID,quesID,data) =>{
    return async dispatch =>{
        try {
            const ques = await api.call('patch',`quiz/${quizID}/question/${quesID}`,data)

            dispatch(set_question(ques))    
        } catch (err) {
            const {error} = err.response.data
            dispatch(ques_fail(error))           
        }
    }
}

export const getMyQuestions = (quizID) =>{
    return async dispatch =>{
        try {
            const questions = await api.call('get',`quiz/${quizID}/question/`)

            dispatch(set_questions(questions))
        } catch (err) {
            const {error} = err.response.data
            dispatch(ques_fail(error)) 
        }
    }
}