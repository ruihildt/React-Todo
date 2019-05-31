import React from 'react';

export default function TodoList({
        todo,
        completeTodo
    }) {

        const onCompleteTodo = event => {
            // Error on this line "completeTodo is not a function"
            completeTodo(todo.id);
        }

        const todoStyle = {
            textDecoration: todo.completed ? 'line-through' : 'initial',
        }

    return (
        <div 
        key={todo.id}
        style={todoStyle}
        onClick={onCompleteTodo}
        >
        {todo.task}
        </div>
        )
}