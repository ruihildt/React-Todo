import React from 'react';

export default function TodoAdder({
        todoName,
        changeHandler,
        addTodo
    }) {

    return (
        <div>
            <input
            value={todoName}
            onChange={changeHandler}
            type="text"></input>
    
            <button onClick={addTodo}>Add todo</button>
            <button>Clear Completed</button>
        </div>
    );
}