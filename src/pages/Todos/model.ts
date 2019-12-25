import { Todo } from "../../store/reducers/todos"
import { ToggleTodoAction, AddTodoAction, ReceiveTodosAction } from "../../store/actions"
import { useReducer, useEffect } from "react"

import axios from 'axios'

const initialTodos: Todo[] = []

function todosReducer(todos: Todo[], action: ToggleTodoAction | AddTodoAction | ReceiveTodosAction): Todo[] {
    switch (action.type) {
        case "ADD_TODO":
            return [...todos, { id: action.id, text: action.text, completed: false }]
        case "TOGGLE_TODO":
            return todos.map(todo => ({ ...todo, completed: todo.id === action.id ? !todo.completed : todo.completed }))
        case "RECEIVE_TODOS":
            return action.todos
        default:
            return todos
    }
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todosReducer, initialTodos)

    useEffect(() => {
        axios.get('/todos').then(res => {
            dispatch({
                type: "RECEIVE_TODOS",
                todos: res.data
            })
        })
    }, [])

    const all = () => todos
    const addTodo = async (string: string) => {
        if (string === "") {
            return
        }
        const { id, text } = await axios.post('/todos', `text=${string}`).then((res) => {
            return res.data as Todo
        })
        dispatch({ type: "ADD_TODO", text, id })
    }
    const toggleTodo = async (id: number) => {
        await axios.patch('/todos', `id=${id}`).then(res => {
            console.log(res)
        })
        dispatch({
            type: "TOGGLE_TODO",
            id
        })
    }

    return {
        all,
        addTodo,
        toggleTodo,
    }

}