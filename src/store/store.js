import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { objReducers } from "./reducers/reducers";
import thunk from 'redux-thunk';

const rootReducer = combineReducers(objReducers)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;