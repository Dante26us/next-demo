import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  loaderReducer: loaderReducer,
});

export default rootReducer;
