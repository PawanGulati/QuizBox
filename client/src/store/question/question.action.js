import {CREATE_QUES, QUES_FAIL} from './question.types'

export const ques_success = ques =>({
    type:CREATE_QUES,
    ques
})

export const ques_fail = error =>({
    type:QUES_FAIL,
    error
})

export const createQues = (quizID,data) =>{
    return async dispatch =>{
        try {
            const ques = await api.call('post',`quiz/${quizID}/question/`)

            dispatch(ques_success(ques))    
        } catch (err) {
            const {error} = err.response.data
            dispatch(addError(error))           
        }
    }
}