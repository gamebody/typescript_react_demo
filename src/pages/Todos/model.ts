import { Todo } from "../../store/reducers/todos"
import { ToggleTodoAction, AddTodoAction, ReceiveTodosAction, Filter } from "../../store/actions"
import { useReducer, useEffect, useState } from "react"

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
    const [filter, setFilter] = useState<Filter>('SHOW_ALL')
    const [todos, dispatch] = useReducer(todosReducer, initialTodos)

    useEffect(() => {
        API.todos.getTodos.request({}).then(data => {
            dispatch({
                type: "RECEIVE_TODOS",
                todos: data
            })
        })
    }, [])

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
        await axios.patch(`/todos/${id}`).then(res => {
            console.log(res)
        })
        dispatch({
            type: "TOGGLE_TODO",
            id
        })
    }
    const getVisibleTodos = () => {
        switch (filter) {
            case 'SHOW_ALL':
                return todos
            case 'SHOW_ACTIVE':
                return todos.filter(todo => todo.completed === false)
            case 'SHOW_COMPLETED':
                return todos.filter(todo => todo.completed === true)
            default:
                return todos
        }
    }

    return {
        todos,
        addTodo,
        toggleTodo,
        setFilter,
        getVisibleTodos
    }
}