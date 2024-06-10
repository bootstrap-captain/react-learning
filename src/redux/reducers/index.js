/*汇总所有的reducer*/

/*k-v，保证后面UI组件的取数据*/
import {combineReducers} from "redux";
import personReducer from "./Person";
import erickCountReducer from "./Counter";

export const allProducer = combineReducers({
    person: personReducer,
    count: erickCountReducer
})
