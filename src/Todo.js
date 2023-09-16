import React, { Component } from 'react';

class Todo extends Component{
    render(){
        return(
            <div>{this.props.task}
                <button onClick={this.props.removeTask}>Remove Task</button>
            </div>
        )
    }
}
export default Todo;