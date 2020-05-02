import Axios from "axios";

import store from '../../store'
import {auth_fail} from '../../store/user/user.action'

Axios.defaults.baseURL = 'http://localhost:8080'

// Axios calling function
export const call = async (method, path, data) => {
        try {
            const response = await Axios[method](`/api/${path}`, data)

            return response.data
        } catch (error) {
            auth_fail({message:error.message})
        }
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
