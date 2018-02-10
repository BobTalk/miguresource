import {createStore, applyMiddleware} from "redux"
import reduxLogger from "redux-logger"
import reduxThunk from "redux-thunk"
import reduxPromise from "redux-promise"
import reducers from "./reducers/index"
let store = createStore(reducers, applyMiddleware(reduxLogger, reduxThunk, reduxPromise))
window._store = store; //用于测试
export  default store;