import { combineReducers } from "redux";
import user from './user_reducer';


// reducer를 쓰기 위해 만듬
const rootReducer = combineReducers({
    user
})

export default rootReducer;