import { combineReducers } from "redux";
import userReducer from '../features/userSlice'

const reducers = combineReducers({
    user: userReducer
});

export default reducers