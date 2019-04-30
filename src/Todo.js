import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <header className="todoHeader">TODO</header>
          <input placeholder="Add a new task..." className="Todo-input" />
          {/*<button className="todoButton" onClick={addTask}> Add </button>*/}
      </div>
    );
  }
}

/*var addTask

    return (
        <button className="todoButton"> Add </button>
    );
}*/

//export default Todo;
