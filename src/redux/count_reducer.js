/*1. 专门为Count组件服务的reducer
* 2. reducer的本质就是一个函数
*    2.1 参数一：之前的状态：preState
*    2.2 参数二：动作对象：action*/

import {DECREMENT, INCREMENT} from "./constants";

export default function erickCountReducer(previousState, action) {
    /*第一次是 undefined*/
    console.log(previousState);

    /*第一次是 type： "@@redux/INIT   c.y.w.x.b(随机字符串，防止和下面的判断对上)" */
    console.log(action);

    if (previousState === undefined) {
        previousState = 50;
    }

    /* 从action对象中获取 type，data*/
    const {type, data} = action;

    switch (type) {
        case INCREMENT:
            /*返回处理后的状态： 后续可以通过 store.getState()在需要的组件里面取*/
            return previousState + data;
        case DECREMENT:
            return previousState - data;
        /*初始化的时候，previousState为undefined*/
        default:
            return previousState;
    }
}