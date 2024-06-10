/*1. 专门为Count组件服务的reducer
* 2. reducer的本质就是一个函数
*    2.1 参数一：之前的状态：preState
*    2.2 参数二：动作对象：action*/

import {DECREMENT, INCREMENT} from "../constants";

export default function erickCountReducer(previousState, action) {
    if (previousState === undefined) {
        previousState = 50;
    }
    const {type, data} = action;
    switch (type) {
        case INCREMENT:
            return previousState + data;
        case DECREMENT:
            return previousState - data;
        default:
            return previousState;
    }
}