import axios from "axios";
import {LOGIN_USER, REGISTER_USER} from './types'

export function loginUser(dataToSubmit) {
    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)

    // LoginPage.js에서 loginUser함수를 사용하는곳에 값을 리턴해준다. -> dispatch(loginUser(body))
    return {
        type: LOGIN_USER,
        payload: request
    }

}

export function registerUser(dataToSubmit) {
    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)

    // LoginPage.js에서 loginUser함수를 사용하는곳에 값을 리턴해준다. -> dispatch(loginUser(body))
    return {
        type: REGISTER_USER,
        payload: request
    }

}