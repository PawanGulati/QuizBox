import {CREATE_QUES,QUES_FAIL} from './question.types'

const initialState = {
    question:null,       // LOL I donno y keepin this state, just thinkin of future
    error:null
}

export const questionReducer = (state=initialState,action) =>{
    switch (action.type) {
        case CREATE_QUES:
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