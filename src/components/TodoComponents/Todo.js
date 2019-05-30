import React from 'react';

function TodoList({todoObj}) {
    return (
        <div key={todoObj.id}>{todoObj.task}</div>
        )
}

export default TodoList;