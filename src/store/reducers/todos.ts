import { AddTodoAction, ToggleTodoAction, ReceiveTodosAction } from "../actions"

export type Todo = {
    id: number
    text: string
    completed: boolean
}

export default (todos: Todo[] = [], action: AddTodoAction | ToggleTodoAction | ReceiveTodosAction) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...todos, 
                { 
                    id: action.id, 
                    text: action.text, 
                    completed: false 
                }
            ]
        case "TOGGLE_TODO":
            return todos.map(todo => {
                return { 
                    ...todo, 
                    completed: todo.id === action.id ? !todo.completed : todo.completed
                }
            })
        case "RECEIVE_TODOS":
            return action.todos
        default:
            return todos
    }
}