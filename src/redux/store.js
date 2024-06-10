import {createStore, applyMiddleware,} from "redux";

/*支持异步任务*/
import {thunk} from "redux-thunk";
import {allProducer} from "./reducers";

/*引入所有的reducer都引入*/
export default createStore(allProducer, applyMiddleware(thunk));