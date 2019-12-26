import React, { KeyboardEvent } from 'react'
import TextInput from '../../_components/TextInput'
import TodoList from "../../_components/TodoList";
import Filter   from "../../_components/Filter";


import { useTodos } from "./model";
import { Filter as FilterType } from '../../store/actions';

const Todos = () => {
    const todos = useTodos();

    const onKeyDownHandle = async (value: string, event: KeyboardEvent) => {
        if (event.keyCode === 13) {
            await todos.addTodo(value)
        }
    }

    const onTodoClickHandler = (id: number) => {
        todos.toggleTodo(id)
    }

    const onClickHandler = (filter: FilterType) => {
        todos.setFilter(filter)
    }

    return (
        <>
            <TextInput
                onKeyDown={onKeyDownHandle} />
            <Filter onClick={onClickHandler} />
            <TodoList todos={todos.getVisibleTodos()} onTodoClick={onTodoClickHandler} />
        </>
    )
}

export default Todos