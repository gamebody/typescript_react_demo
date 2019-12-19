import React, { FC } from 'react'

import TodoItem from '../TodoItem'
import { connect, ConnectedProps } from 'react-redux'
import { RootState, RootDispatch } from '../../store'
import { Filter, toggleTodo } from '../../store/actions'
import { Todo } from '../../store/reducers/todos'

let TodoList:FC<Props> = ({todos, onTodoClick}) => {
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

const getVisibleTodos = (todos: Todo[], filter: Filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos
        case "SHOW_ACTIVE":
            return todos.filter(todo => todo.completed === false)
        case "SHOW_COMPLETED":
            return todos.filter(todo => todo.completed === true)
        default:
            return todos
    }
}
const mapStateToProps = (state: RootState) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}
const mapDispatchToProps = (dispatch: RootDispatch) => {
    return {
        onTodoClick: (id: number) => {
            dispatch(toggleTodo(id))
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type Props = ConnectedProps<typeof connector>


export default connector(TodoList)