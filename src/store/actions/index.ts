import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, SET_INPUT_VALUE, RECEIVE_TODOS } from '../actionTypes'
import { ThunkAction } from 'redux-thunk'
import { RootState, RootDispatch } from '..'
import { Action } from 'redux'

import axios from 'axios'
import qs from 'querystring'
import { Todo } from '../reducers/todos'

export type ReceiveTodosAction = {
    type: typeof RECEIVE_TODOS,
    todos: Todo[]
}
export const ReceiveTodosAction = (todos: Todo[]): ReceiveTodosAction => {
    return {
        type: RECEIVE_TODOS,
        todos
    }
}
export const ReceiveTodos = (): ThunkAction<void, RootState, null, Action<string>> => {
    return (dispatch: RootDispatch) => {
        return axios.get('/todos').then(res => {

            if (res.data.code === 1) {
                dispatch(ReceiveTodosAction(res.data.data))
            }
        })
    }
}

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
export const asyncAddTodo = (text: string): ThunkAction<void, RootState, null, Action<string>> => {
    return (dispatch: RootDispatch) => {
        return axios.post('/todos', qs.stringify({ text })).then(res => {

            if (res.data.code === 1) {
                const payLoad = {
                    id: res.data.data.id,
                    text: res.data.data.text,
                    actived: res.data.data.actived,
                    completed: res.data.data.completed
                }
                dispatch(addTodoAction(payLoad))
            }
        })
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


// 

