import {Header} from "./Header/Header";
import {List} from "./List/List";
import {Footer} from "./Footer/Footer";
import React, {Component} from "react";

export class TodoList extends Component {
    /*状态在哪里，状态的操作就在哪里*/
    state = {
        taskArr: []
    }

    /*添加任务*/
    addTask = (task) => {
        const {taskArr} = this.state;
        /*去重*/
        for (let i = 0; i < taskArr.length; i++) {
            if (taskArr[i].taskName === task.taskName) {
                alert('当前任务已创建');
                return;
            }
        }

        taskArr.unshift(task);
        this.setState({
            taskArr: taskArr
        })
    }

    /*更新一个task的status状态*/
    updateTaskStatus = (taskId, taskStatus) => {
        const {taskArr} = this.state;
        for (let i = 0; i < taskArr.length; i++) {
            if (taskArr[i].taskId === taskId) {
                taskArr[i].taskStatus = taskStatus;
            }
        }
        this.setState({
            taskArr: taskArr
        })
    }

    /*删除一个*/
    deleteTask = (taskId) => {
        const {taskArr} = this.state;
        let newArr = taskArr.filter((task) => {
            return task.taskId !== taskId;
        });
        this.setState({
            taskArr: newArr
        })
    }

    /*改变所有的状态*/
    updateAll = (taskStatus) => {
        const {taskArr} = this.state;
        for (let i = 0; i < taskArr.length; i++) {
            taskArr[i].taskStatus = taskStatus;
        }
        this.setState({
            taskArr: taskArr
        })
    }

    /*清空已经完成的*/
    clearFinishedTask = () => {
        const {taskArr} = this.state;
        let newArr = taskArr.filter((task) => {
            return task.taskStatus !== true;
        });
        this.setState({
            taskArr: newArr
        })
    }

    render() {
        return (<div>
            <Header addTask={this.addTask}/>
            <List taskArr={this.state.taskArr} updateTaskStatus={this.updateTaskStatus}
                  deleteTask={this.deleteTask}/>
            <Footer taskArr={this.state.taskArr} updateAll={this.updateAll} clearFinishedTask={this.clearFinishedTask}/>
        </div>)
    }
}