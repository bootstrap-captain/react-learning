import {createStore, applyMiddleware, combineReducers} from "redux";
import personReducer from "./reducers/Person";
import countReducer from './reducers/Counter'
/*支持异步任务*/
import {thunk} from "redux-thunk";

/*k-v，保证后面UI组件的取数据*/
const allProducer = combineReducers({
    person: personReducer,
    count: countReducer
})

/*需要对所有的reducer都引入*/
export default createStore(allProducer, applyMiddleware(thunk));