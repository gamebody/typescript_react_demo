import { AddTodoAction, ToggleTodoAction } from "../actions"

export type Todo = {
    id: number
    text: string
    completed: boolean
}

export default (todos: Todo[] = [], action: AddTodoAction | ToggleTodoAction) => {
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
        default:
            return todos
    }
}