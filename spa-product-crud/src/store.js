import {applyMiddleware, createStore, combineReducers} from "redux";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";
import commentsReducer from "./reducers/commentsReducer";
import productListReducer from "./reducers/productListReducer";
import productDetailsReducer from "./reducers/productDetailsReducer";

let middleware = applyMiddleware(promiseMiddleware(), thunk);
let reducers = combineReducers({commentsReducer, productListReducer, productDetailsReducer});

export default createStore(reducers, {}, middleware);

