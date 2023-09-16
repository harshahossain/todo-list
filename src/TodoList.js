import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            tasks:[]
        }
        this.create=this.create.bind(this)
    }
    create(newTask){
        this.setState({
            tasks:[...this.state.tasks,newTask]
        })
    }
    remove(id){
        this.setState({
            tasks:this.state.tasks.filter(task=>task.id!==id)
        })
    }
    render(){
        const tasks=this.state.tasks.map(task=>(
            <Todo key={task.id} task={task.task} removeTask={()=>this.remove(task.id)}/>
        ));
        return(
            <div>
                <h1>Todo List</h1>
                {tasks}
                <NewTodoForm createTask={this.create}/> 
            </div>
        )
    }
}

export default TodoList;