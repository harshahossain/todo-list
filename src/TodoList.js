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
        this.remove=this.remove.bind(this)
        this.update=this.update.bind(this)
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
    update(id,updatedTask){
        const updatedTodos=this.state.tasks.map(task=>{
            if(task.id===id){
                return{...task,task:updatedTask}
            }
            return task;
        })
        this.setState({tasks:updatedTodos})
    }
    render(){
        const tasks=this.state.tasks.map(task=>(
            // <Todo key={task.id} task={task.task} removeTask={()=>this.remove(task.id)}/>
            <Todo
             key={task.id} 
             task={task.task} 
             removeTask={this.remove} 
             id={task.id}
             updateTask={this.update}/>
        ));
        return(
            <div>
                <h1>Todo List</h1>
                <ul>{tasks}</ul>
                <NewTodoForm createTask={this.create}/> 
            </div>
        )
    }
}

export default TodoList;