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
            return [data, ...previousState]
        default:
            return previousState;
    }
}