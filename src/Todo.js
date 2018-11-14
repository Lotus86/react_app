import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <header className="Todo-header">TODO</header>
          <input placeholder="Add a new task..." className="Todo-input" />
      </div>
    );
  }
}

export default Todo;
