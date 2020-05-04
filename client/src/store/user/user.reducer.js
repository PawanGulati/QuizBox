import {AUTH_FAIL,AUTH_START,AUTH_SUCCESS, AUTH_COMP_CLOSE} from './user.types'

const initialState = {
    current_user:null,
    loading:false,
    error:null,
    openErrComp:false
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
                error:action.error.message,
                openErrComp:true
            }    
        case AUTH_COMP_CLOSE:
            return{
                ...state,
                openErrComp:false,
                error:null
            }    
        default:
            return state
    }
}