// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

function TodoList ({todoList}) {
    return (
        todoList.map(todoObj => (
            <div key={todoObj.id}>{todoObj.task}</div>
        ))
    )
}

export default TodoList;