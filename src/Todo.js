import React, { Component } from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            isEditing:false,
            task:this.props.task
        }
        this.handleRemove=this.handleRemove.bind(this);
        this.toggleForm=this.toggleForm.bind(this)
        this.handleUpdate=this.handleUpdate(this);
        this.handleChange=this.handleChange(this);

    }
    handleRemove(){
        this.props.removeTask(this.props.id);
    }
    toggleForm(){
        this.setState({isEditing:!this.state.isEditing})
    }
    handleUpdate(evt){
     evt.preventDefault()
     this.props.updateTask(this.props.id,this.state.task)
     this.setState({isEditing:false})
    }
    handleChange(evt){
    //    console.log (evt)
          this.setState({
              [evt.target.name]:evt.target.value
         })
    }
    render(){
        let result;
        if(this.state.isEditing){
           result=(
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type='text' name='task' value={this.state.task} onChange={this.handleChange}/>  
                        <button>Save</button>
                     </form>
                 </div>) 
        }else{
            result=(<div>
                <button onClick={this.toggleForm}>Edit</button>
                {/* <button onClick={this.props.removeTask}>Remove Task</button> */}
                <button onClick={this.handleRemove}>Remove Task</button>
                <li>{this.props.task}</li>
            </div>)
        }
        return result;
    }
}
export default Todo;