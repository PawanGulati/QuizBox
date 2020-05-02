import {CREATE_QUIZ, QUIZ_FAIL} from './quiz.types'

const initialState = {
    quizzes:[],
    quiz:null,
    error:null,
    // loading:false
}

export const quizReducer = (state=initialState,action) =>{
    switch (action.type) {
        case CREATE_QUIZ:
            return {
                ...state,
                quizzes:[...state.quizzes,action.quiz],
                quiz:action.quiz,
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