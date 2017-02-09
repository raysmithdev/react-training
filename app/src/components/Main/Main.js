import React, { Component } from 'react';
import Header from '../Header/Header';
import AddToDo from '../AddToDo/AddToDo';
import List from '../List/List';
import './Main.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }

    this.addToDo = this.addToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  addToDo(text) {
    let todo = {
      id: Math.random(),
      text
    };

    this.state.todos.push(todo);

    this.setState({ todos: this.state.todos });
  }

  deleteToDo(todoId) {
    const todos = this.state.todos.filter(todo => todo.id !== todoId);

    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App-Content">
          <AddToDo addToDo={this.addToDo} />
          <List
            deleteToDo={this.deleteToDo}
            todos={this.state.todos}
          />
        </div>
      </div>
    );
  }
}

export default App;
