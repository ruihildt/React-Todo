import React from 'react';
import uuid from 'uuid';

import TodoAdder from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const initialTodoList = [{
    task: '',
    id: '',
    completed: false
  }
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: initialTodoList,
      todoName:'',
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  changeHandler = (event) => {
    this.setState({ todoName: event.target.value });
  }

  completeTodo = id => {
    this.setState(currentState => ({
      todoList: currentState.todoList.map(todo => {
        if (todo.id === id) {
        todo.complete = todo.complete ? false : true;
        }
        return todo;
      }),
    }));
  }

  addTodo = () => {
    const newTodo = {
      task: this.state.todoName,
      id: uuid(),
      completed: false,
    }

    this.setState( st => ({
      todoList: st.todoList.concat(newTodo),
      todoName: '',
    }));
  }

  render() {
    return (
      <div>
        <h3>Tasks list</h3>

        <TodoList
        todoList ={this.state.todoList}
        />

        <TodoAdder
          todoName={this.state.todoName}
          changeHandler={this.changeHandler}
          addTodo={this.addTodo}
        />

      </div>
    );
  }
}

export default App;