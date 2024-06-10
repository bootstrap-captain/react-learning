import {connect} from "react-redux";
import {createAsyncIncrementAction, createDecrementAction, createIncrementAction} from "../../redux/actions/Count";
import {Component, createRef} from "react";

/*UI的类*/
export class Count extends Component {

    selectRef = createRef();

    increment = () => {
        let value = this.selectRef.current.value;
        this.props.increment(value * 1);
    }

    decrement = () => {
        let value = this.selectRef.current.value;
        this.props.decrement(value * 1);
    }

    incrementIfOdd = () => {
        let value = this.selectRef.current.value;
        let previous = this.props.count;
        if (previous % 2 !== 0) {
            this.props.incrementIfOdd(value * 1);
        }
    }

    asyncIncrement = () => {
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

                <br/>
                <ul>
                    {this.props.person.map((p, index) => {
                        return <li key={index}>{p.name}==={p.address}==={p.age}</li>
                    })}
                </ul>
            </div>
        )
    }
}

/*Container的类, 暴露出去的是这个
* 1. 可以随便去对应的state中解析需要的数据*/
function mapStateToProps(state) {
    return {
        count: state.count,
        person: state.person
    }
}

const mapDispatchToPros = {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementIfOdd: createIncrementAction,
    asyncIncrement: createAsyncIncrementAction
}


export const CountContainer = connect(mapStateToProps, mapDispatchToPros)(Count);
