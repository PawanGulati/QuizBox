import {SET_QUESTIONS,QUES_FAIL, SET_QUESTION} from './question.types'

const initialState = {
    question:null,  
    questions:[],
    error:null
}

export const questionReducer = (state=initialState,action) =>{
    switch (action.type) {
        case SET_QUESTIONS:
            return {
                ...state,
                error:null,
                questions:action.quess
            }     
        case SET_QUESTION:
            return {
                ...state,
                error:null,
                question:action.ques
            }            
        case QUES_FAIL:
            return {
                ...state,
                error:action.error
            }
        default:
            return state
    }
}