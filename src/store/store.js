import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  account: LoginReducer,
  order: orderReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
