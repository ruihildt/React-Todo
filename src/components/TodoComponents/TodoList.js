import React from 'react';

import Todo from './Todo';

function TodoList ({todoList}) {
    return (
        todoList.map(todoObj => (
            <Todo
            todoObj={todoObj}
            />
        ))
    )
}

export default TodoList;