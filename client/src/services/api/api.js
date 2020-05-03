import Axios from "axios";

import store from '../../store'
import {auth_fail} from '../../store/user/user.action'

if(process.env.NODE_ENV !== 'production')
    Axios.defaults.baseURL = 'http://localhost:8080'

// Axios calling function
export const call = async (method, path, data) => {
            const response = await Axios[method](`/api/${path}`, data)
            
            return response.data
}

//Axios setHeader function
export const setToken = (token) => {
    if (token) {
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete Axios.defaults.headers.common['Authorization']
    }
}

export default {
    call,
    setToken
}
