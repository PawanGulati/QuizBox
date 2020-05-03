import {SET_QUIZ,SET_QUIZZES, QUIZ_FAIL} from './quiz.types'

const initialState = {
    quizzes:[],
    quiz:null,
    error:null,
    // loading:false
}

export const quizReducer = (state=initialState,action) =>{
    switch (action.type) {
        case SET_QUIZ:
            return {
                ...state,
                quiz:action.quiz,
                error:null
            }
        case SET_QUIZZES:
            return{
                ...state,
                quizzes:action.quizzes,
                error:null
            }
        case QUIZ_FAIL:
            return{
                ...state,
                error:action.error
            }
        default:
            return state
    }
}