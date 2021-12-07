import { LOGIN_USER, REGISTER_USER } from "../_actions/types";

// user reducer 작성 파일

// reducer는 전 상태와 현재 상태를 -> nextState로 만듬.
// state = 전 상태에 state, action = 현재상태
export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }

        case REGISTER_USER:
            return { ...state, register: action.payload}
    
        default:
            return state;
    }
}