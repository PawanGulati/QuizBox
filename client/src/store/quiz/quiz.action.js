import {SET_QUIZ,SET_QUIZZES,QUIZ_FAIL, QUIZ_COMP_CLOSE} from './quiz.types'

import api from '../../services/api/api'

export const set_quiz = quiz =>({
    type:SET_QUIZ,
    quiz
})

export const set_quizzes = quizzes =>({
    type:SET_QUIZZES,
    quizzes
})


export const quiz_fail = error =>({
    type:QUIZ_FAIL,
    error
})

export const quiz_err_comp_close = () =>({
    type:QUIZ_COMP_CLOSE
})

export const createQuiz = data =>{
    return async dispatch =>{
        try {
            const quiz = await api.call('post','quiz',data)
            
            dispatch(set_quiz(quiz))
            return quiz

        } catch (err) {
            const {error} = err.response.data
            dispatch(quiz_fail(error))           
        }
    }
}

export const getMyQuizzes = () =>{
    return async dispatch =>{
        try {
            const quizzes = await api.call('get','quiz/user')
            
            dispatch(set_quizzes(quizzes))

        } catch (err) {
            const {error} = err.response.data
            dispatch(quiz_fail(error))
        }
    }
}

export const getQuiz = id =>{
    return async dispatch =>{
        try {
            const quiz = await api.call('get',`quiz/${id}`)
            
            dispatch(set_quiz(quiz))

        } catch (err) {
            const {error} = err.response.data
            dispatch(quiz_fail(error))
        }
    }
}