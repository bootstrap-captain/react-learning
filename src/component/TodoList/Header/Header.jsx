import {Component} from "react";
import {nanoid} from "nanoid";
import PropTypes from "prop-types";

export class Header extends Component {

    /*如果不是Enter触发，或者空字符串，则不添加*/
    handleUp = (event) => {
        if (event.key === 'Enter' && event.keyCode === 13) {
            const taskName = event.target.value.trim();
            if (taskName === '') {
                return;
            }

            const task = {
                taskId: nanoid(7),
                taskName: taskName,
                taskStatus: true,
            }
            this.props.addTask(task);
        }
    }

    render() {
        return (<div>
            {/*保存当前任务状态，调用父组件的方法*/}
            <input onKeyUp={this.handleUp} type="text" placeholder="请输入新增任务并按回车"/>
        </div>)
    }

    static propTypes = {
        addTask: PropTypes.func
    }
}