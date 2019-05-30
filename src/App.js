import React from 'react';
import uuid from 'uuid';

import TodoAdder from './components/TodoComponents/TodoForm';

const inititalTodoList = [{
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: inititalTodoList,
      todoName:'',
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  changeHandler = (event) => {
    this.setState({ todoName: event.target.value });
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
      <div className="todo-container">
        <h3>Tasks list</h3>

        {
          this.state.todoList.map(todoObj => (
            <div key={todoObj.id}>{todoObj.task}</div>
          ))
        }

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