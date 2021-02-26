import { combineReducers } from "redux";
import loginReducer from "./App/Login/Reducer";
import userDetailsReducer from "./App/UserDetails/Reducer";
export default combineReducers({
  loginReducer,
  userDetailsReducer
});
