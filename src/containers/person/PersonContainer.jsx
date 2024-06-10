import {Component, createRef} from "react";
import {createAddPersonAction} from "../../redux/actions/Person";
import {connect} from "react-redux";

/*UI组件*/
export class Person extends Component {
    nameRef = createRef();
    ageRef = createRef();
    addressRef = createRef();

    addPerson = () => {
        let person = {
            name: this.nameRef.current.value,
            address: this.nameRef.current.value,
            age: this.ageRef.current.value
        }
        this.props.addPerson(person);
    }

    render() {
        return (
            <div>
                <h2>Person组件</h2>
                <input type="text" ref={this.nameRef} placeholder="输入姓名"/>
                <input type="text" ref={this.ageRef} placeholder="输入年龄"/>
                <input type="text" ref={this.addressRef} placeholder="输入地址"/>
                <button onClick={this.addPerson}>添加</button>

                <h3>上方求和为{this.props.count}</h3>
                <ul>
                    {this.props.person.map((p, index) => {
                        return <li key={index}>{p.name}==={p.address}==={p.age}</li>
                    })}
                </ul>
            </div>
        );
    }
}

/*传递属性*/
function mapStateToProps(state) {
    return {
        count: state.count,
        person: state.person
    }
}

/*传递方法*/
const mapDispatchToPros = {
    addPerson: createAddPersonAction
}

export const PersonContainer = connect(mapStateToProps, mapDispatchToPros)(Person);