import {AUTH_FAIL,AUTH_START,AUTH_SUCCESS} from './user.types'

const initialState = {
    current_user:null,
    loading:false,
    error:null
}

export const userReducer = (state=initialState,action) =>{
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                error:null,
                loading:true
            }            
        case AUTH_SUCCESS:
            return {
                ...state,
                current_user:action.user,
                loading:false,
                error:null
            }
        case AUTH_FAIL:
            return {
                ...state,
                loading:false,
                error:action.error
            }    
        default:
            return state
    }
}