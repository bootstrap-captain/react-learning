import {Component, createRef} from "react";
import store from "../../redux/store";

export class CountUI extends Component {

    selectRef = createRef();

    componentDidMount() {
        /*单纯保留，为了触发render*/
        store.subscribe(() => {
            /*不做任何处理，单纯为了触发render*/
            this.setState({});
        })
    }

    increment = () => {
        let value = this.selectRef.current.value;
        /*调用容器组件的方法*/
        this.props.increment(value * 1);
    }

    decrement = () => {
        let value = this.selectRef.current.value;
        /*调用容器组件的方法*/
        this.props.decrement(value * 1);
    }

    incrementIfOdd = () => {
        let value = this.selectRef.current.value;
        /*从容器中去取数据*/
        let previous = this.props.count;

        if (previous % 2 !== 0) {
            /*调用容器组件的方法*/
            this.props.incrementIfOdd(value * 1);
        }
    }

    asyncIncrement = () => {
        /*调用容器组件的方法*/
        let value = this.selectRef.current.value;
        this.props.asyncIncrement(value * 1, 1000);
    }

    render() {
        return (
            <div>

                <h1>当前求和为{this.props.count}</h1>

                <select ref={this.selectRef}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>&nbsp;&nbsp;&nbsp;

                <button onClick={this.increment}>+</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>当前count为奇数再加</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.asyncIncrement}>异步加</button>
            </div>
        )
    }
}