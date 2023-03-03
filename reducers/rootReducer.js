import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";
import logInReducer from "./loginInReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  loaderReducer: loaderReducer,
  login: logInReducer,
});

export default rootReducer;
