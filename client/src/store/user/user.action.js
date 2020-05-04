import {AUTH_FAIL,AUTH_SUCCESS,AUTH_START, AUTH_COMP_CLOSE} from './user.types'

import api from '../../services/api/api'

export const auth_fail = error =>({
    type:AUTH_FAIL,
    error
})

export const auth_err_comp_close = () =>({
    type:AUTH_COMP_CLOSE
})

export const auth_success = user =>({
    type:AUTH_SUCCESS,
    user
})

export const auth_start = () =>({
    type:AUTH_START,
})

const setToken = token =>{
    api.setToken(token)
}

export const setCurUser = (path,data) =>{
    return async dispatch =>{
        try {
            const {token, ...user} = await api.call('post',`auth/${path}`,data)

            setToken(token) 
            
            localStorage.setItem(
                'jwtToken',token
            )
            dispatch(auth_success(user))
        } catch (err) {
            const {error} = err.response.data

            dispatch(auth_fail(error))
        }
    }
}

// logout
export const logout = () =>{
    return dispatch =>{
        localStorage.clear()
        api.setToken(null)
        dispatch(auth_success(null))
    }
}