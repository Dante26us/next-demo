import rootReducer from "@/reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`);

  const logger = createLogger({
    collapsed: true,
  });
  middleware.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleware],
});

export default store;
