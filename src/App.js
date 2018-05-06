import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      task: ""
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(index=-1) {
    // e.preventDefault();
  if(index!==-1){
    let prevTasks = this.state.todos;
    prevTasks.push(this.state.task);
    this.setState({
      todos: prevTasks,
      task: ""
    });
  }
  else{
    let prevTasks = this.state.todos
    prevTasks[index]=this.state.task
    this.setState({
      todos:prevTasks
    })

  }
  }
  handleUpdate(e, index) {
    this.setState({
      task: this.state.todos[index]
    });
    this.handleSubmit(index)

  }
  render() {
    return (
      <div>
        <input
          value={this.state.task}
          name="task"
          onChange={e => this.handleChange(e)}
          type="text"
          placeholder="Enter task..."
        />
        <button onClick={() => this.handleSubmit()}>Submit</button>
        <ul>
          {this.state.todos.length
            ? this.state.todos.map((todo, index) => {
                return (
                  <li onClick={() => this.handleUpdate(index)} key={index}>
                    {todo}
                  </li>
                );
              })
            : "NO todo task..."}
        </ul>
      </div>
    );
  }
}
