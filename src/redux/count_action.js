import {DECREMENT, INCREMENT} from "./constants";


/*同步Action: action的值为Object类型的一般对象*/
export function createIncrementAction(data) {
    return {type: INCREMENT, data: data};
}

export function createDecrementAction(data) {
    return {type: DECREMENT, data: data};
}

/*异步Action:
*    1. action的值为函数
*    2. 异步action中，一般都会回调同步action，异步action不是必须要使用的*/

export function createAsyncIncrementAction(data, time) {
    /*返回的函数，store会自己来执行，会传递一个dispatch操作*/
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}