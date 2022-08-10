import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import { combineReducers } from "redux";


const reducers = combineReducers({
    user:userReducer
  });

export default configureStore({
    devTools: true,
    reducer: reducers,
})