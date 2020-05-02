import {CREATE_QUIZ,QUIZ_FAIL} from './quiz.types'

import api from '../../services/api/api'

export const quiz_success = quiz =>({
    type:CREATE_QUIZ,
    quiz
})

export const quiz_fail = error =>({
    type:QUIZ_FAIL,
    error
})

export const createQuiz = data =>{
    return async dispatch =>{
        try {
            const quiz = await api.call('post','quiz',data)

            dispatch(quiz_success(quiz))

        } catch (err) {
            const {error} = err.response.data
            dispatch(quiz_fail(error))           
        }
    }
}