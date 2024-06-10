/*初始对象*/
import {ADD_PERSON} from "../constants";

const initialState = [{}]
export default function personReducer(previousState, action) {
    if (previousState === undefined) {
        return initialState;
    }

    const {type, data} = action;

    switch (type) {
        case ADD_PERSON:
            /*不能在previousState中push，否则不能触发渲染*/
            return [data, ...previousState]
        default:
            return previousState;
    }
}