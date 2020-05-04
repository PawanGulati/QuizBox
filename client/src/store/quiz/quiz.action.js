import {SET_QUIZ,SET_QUIZZES,QUIZ_FAIL} from './quiz.types'

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

export const createQuiz = data =>{
    return async dispatch =>{
        try {
            console.log(data);
            
            const quiz = await api.call('post','quiz',data)
            
            dispatch(set_quiz(quiz))

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
            console.log(quizzes);
            
            
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