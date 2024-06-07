import {Component} from "react";
import PropTypes from "prop-types";

export class Item extends Component {

    state = {
        mouse: false
    }

    /*鼠标移入移出回调*/
    handleMouse = (flag) => {
        return () => {
            this.setState({
                mouse: flag
            })
        }
    }

    /*勾选/取消勾选回调*/
    handleCheck = (taskId) => {
        return (event) => {
            /*是否勾选的状态*/
            let taskStatus = event.target.checked;
            this.props.updateTaskStatus(taskId, taskStatus)
        }
    }

    /*删除一个的回调*/
    handleDelete = (taskId) => {
        return () => {
            let flag = window.confirm('确定删除吗?')
            if (flag) {
                this.props.deleteTask(taskId);
            }
        }
    }

    render() {
        const {taskId, taskName, taskStatus} = this.props;
        return (/*li上的事件
            *  onMouseEnter：鼠标移入
            *  onMouseLeave：鼠标移出*/
            <li style={{backgroundColor: this.state.mouse ? "gray" : "white"}}
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>

                <label>
                    {/*checked: 一下子写死了，要该，必须写onChange回调函数
                    defaultChecked: 只会在第一次起作用*/}
                    <input type="checkbox" checked={taskStatus} onChange={this.handleCheck(taskId)}/>
                    <span>id={taskId},name={taskName},status={taskStatus ? 'true' : 'false'}</span>
                </label>
                <button onClick={this.handleDelete(taskId)}
                        style={{display: this.state.mouse ? 'block' : 'none'}}>删除
                </button>
            </li>)
    }

    static propTypes = {
        updateTaskStatus: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired
    }
}