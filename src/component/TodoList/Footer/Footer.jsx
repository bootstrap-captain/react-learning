import {Component} from "react";
import PropTypes from "prop-types";

export class Footer extends Component {

    static propTypes = {
        updateAll: PropTypes.func.isRequired,
        clearFinishedTask: PropTypes.func.isRequired,
    }

    handleAllChange = (event) => {
        let taskStatus = event.target.checked;
        this.props.updateAll(taskStatus);
    }

    handleFinished = () => {
        this.props.clearFinishedTask();
    }


    render() {
        let taskArr = this.props.taskArr;

        let total = taskArr.length;

        let done = 0
        for (let i = 0; i < taskArr.length; i++) {
            if (taskArr[i].taskStatus) {
                done++;
            }
        }

        return (
            /*React中， 如果选了checked，一定要提供onChange方法，才能再次点击该按钮*/
            <div>

                <input type="checkbox" checked={total === done && total !== 0} onChange={this.handleAllChange}/>
                已完成{done}/全部{total}
                <button onClick={this.handleFinished}>清除已完成</button>
            </div>
        )
    }

}