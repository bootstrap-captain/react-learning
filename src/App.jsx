import {Component} from "react";
import {CountContainer} from "./containers/Count/CountContainer";
import store from "./redux/store";

export default class App extends Component {
    render() {
        return (
            <div>
                {/*给容器组件传递：store*/}
                <CountContainer store={store}/>
            </div>)
    }
}