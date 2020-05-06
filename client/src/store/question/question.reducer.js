import {SET_QUESTIONS,QUES_FAIL, SET_QUESTION, SET_CUR_QUES_NO} from './question.types'

const initialState = {
    question:null,  
    questions:[],
    error:null,
    cur_ques_no:1
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
        case SET_CUR_QUES_NO:
            return {
                ...state,
                cur_ques_no:action.curr_ques_no
            }
        default:
            return state
    }
}