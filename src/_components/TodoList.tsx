import React, { FC } from 'react'
import { Todo } from '../store/reducers/todos'

interface ITodoItem {
    text: string
    completed: boolean
    onClick: () => void
} 

const TodoItem: React.FC<ITodoItem> = ({ text, completed, onClick }) => {
    return (
        <li 
            onClick={onClick} 
            style={{ textDecoration: completed ? "line-through" : "" }}>
            {text}
        </li>
    )          
}


interface ITodoList {
    todos: Todo[],
    onTodoClick: (id: number) => void
}
let TodoList:FC<ITodoList> = ({todos, onTodoClick}) => {

    const list = todos.map(todo => {
        return (
            <TodoItem
                key={todo.id} 
                text={todo.text} 
                completed={todo.completed} 
                onClick={() => onTodoClick(todo.id)} />
        )
    })

    return <ul>
        {list}
    </ul>
}

export default TodoList