import {SET_QUIZ,SET_QUIZZES, QUIZ_FAIL, QUIZ_COMP_CLOSE} from './quiz.types'

const initialState = {
    quizzes:[],
    quiz:null,
    error:null,
    openErrComp:false
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
                error:action.error.message,
                openErrComp:true
            }
        case QUIZ_COMP_CLOSE:
            return{
                ...state,
                openErrComp:false,
                error:null
            }        
        default:
            return state
    }
}