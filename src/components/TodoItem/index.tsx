import React from 'react'

interface TodoitemProps {
    text: string
    completed: boolean
    onClick: () => void
} 

const TodoItem: React.FC<TodoitemProps> = ({ text, completed, onClick }) => {
return <li onClick={onClick} style={{ textDecoration: completed ? "line-through" : "" }}>{text}</li>
}
export default TodoItem