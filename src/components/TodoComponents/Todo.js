import React from 'react';

function Todo(props) {
    return(
        <div>
            {props.todos.task}
        </div>
    )
}

export default Todo;