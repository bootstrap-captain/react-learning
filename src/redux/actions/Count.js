import {DECREMENT, INCREMENT} from "../constants";

export function createIncrementAction(data) {
    return {type: INCREMENT, data: data};
}

export function createDecrementAction(data) {
    return {type: DECREMENT, data: data};
}

export function createAsyncIncrementAction(data, time) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}