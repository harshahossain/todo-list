import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';

class NewTodoForm extends Component{
    constructor(props){
        super(props)
        this.state={task:''}
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(evt){
        evt.preventDefault()
        const newTask={...this.state,id:uuidv4()}
        this.props.createTask(newTask)
        this.setState({
            task:''
        })
    }
    handleChange(evt){
        console.log(evt)
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>Add A Task</label>
                <input id='task' name='task' value={this.state.task} onChange={this.handleChange}/>
                <button>Add Task</button>
            </form>
        )
    }

}
export default NewTodoForm;