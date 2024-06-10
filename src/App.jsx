import {Component} from "react";
import {CountContainer} from "./containers/Count/CountContainer";
import {PersonContainer} from "./containers/person/PersonContainer";

export default class App extends Component {
    render() {
        return (
            <div>
                <CountContainer/>
                <hr/>
                <PersonContainer/>
            </div>)
    }
}