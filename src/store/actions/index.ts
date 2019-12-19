import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, SET_INPUT_VALUE } from '../actionTypes'

export type AddTodoAction = {
    type: typeof ADD_TODO
    id: number
    text: string
}
interface Ipayload {
    id: number,
    text: string,
}
export const addTodoAction = (payload: Ipayload): AddTodoAction => {
    return {
        type: ADD_TODO,
        id: payload.id,
        text: payload.text,
    }
}

export type ToggleTodoAction = {
    type: typeof TOGGLE_TODO
    id: number
}
export const toggleTodo = (id: number): ToggleTodoAction => {
    return {
        type: TOGGLE_TODO,
        id: id
    }
}

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
export type Filter = keyof typeof visibilityFilters
export type setVisibilityFilterAction = {
    type: typeof SET_VISIBILITY_FILTER,
    filter: Filter
}
export const setVisibilityFilter = (filter: Filter): setVisibilityFilterAction => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filter
    }
}


// input 的输入
export type setInputValueAction = {
    type: typeof SET_INPUT_VALUE,
    value: string
}
export const setInputValue = (value: string): setInputValueAction => {
    return {
        type: SET_INPUT_VALUE,
        value
    }
}

