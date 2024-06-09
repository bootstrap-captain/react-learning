import {createStore, applyMiddleware} from "redux";
import erickCountReducer from './count_reducer'

/*支持异步任务*/
import {thunk} from "redux-thunk";

export default createStore(erickCountReducer, applyMiddleware(thunk));