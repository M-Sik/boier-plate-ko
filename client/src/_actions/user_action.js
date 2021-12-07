import axios from "axios";
import {LOGIN_USER, REGISTER_USER, AUTH_USER} from './types'

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

    return {
        type: REGISTER_USER,
        payload: request
    }

}

// auth 인증은 get메소드이기 때문에 body(dataToSubmit)가 필요 없다.
export function auth() {
    const request = axios.get('/api/users/auth')
        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }

}
