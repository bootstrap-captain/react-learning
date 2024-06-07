import {Component} from "react";
import {Item} from "../Item/Item";
import PropTypes from "prop-types";

export class List extends Component {
    render() {
        const {taskArr} = this.props;
        /*在List中嵌套Item*/
        return (
            <ul>
                {
                    taskArr.map((task) => {
                        return <Item key={task.taskId} {...task} updateTaskStatus={this.props.updateTaskStatus}
                                     deleteTask={this.props.deleteTask}/>
                    })
                }
            </ul>
        )
    }

    static propTypes = {
        updateTaskStatus: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired
    }

}