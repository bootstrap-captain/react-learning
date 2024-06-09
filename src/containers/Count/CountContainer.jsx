/*引入UI组件*/
import {CountUI} from "../../component/Count/CountUI";

/*引入connect用于链接UI组件和redux*/
import {connect} from "react-redux";
import {createAsyncIncrementAction, createDecrementAction, createIncrementAction} from "../../redux/count_action";

/*1. 回调函数： 用于向UI组件传递状态
*   1.1 返回一个对象
*   1.2 对象的key作为传递给UI组件的props的key， value就是作为传递给UI组件的props的value
*   1.3 参数：在App组件中已经传递了store，因此store和这个函数交互时候，传入state*/
function mapStateToProps(state) {
    return {count: state}
}

/*2. 回调函数： 用于向UI组件传递操作状态的方法
*     2.1 返回一个对象
*     2.2 对象的key作为传递给UI组件的props的key， value作为传递给UI组件的props的value
*     2.3. value是一个函数*/
function mapDispatchToPros(dispatch) {
    return {
        /*将事件分发给store*/
        increment: (data) => {
            dispatch(createIncrementAction(data))
        },

        decrement: (data) => {
            dispatch(createDecrementAction(data))
        },

        incrementIfOdd: (data) => {
            dispatch(createIncrementAction(data))
        },

        asyncIncrement: (data, time) => {
            dispatch(createAsyncIncrementAction(data, time))
        }
    }

}


/*创建容器组件，并暴露
*  参数一： store，会在app中传递
*  参数二： UI组件*/
export const CountContainer = connect(mapStateToProps, mapDispatchToPros)(CountUI);
