import React from 'react';

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
      todosList: inititalTodoList,
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="todo-container">
        <h3>Tasks list</h3> {
          this.state.todosList.map(todoObj => {
            return (
            <div key={todoObj.id}>
              {todoObj.task}
            </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
