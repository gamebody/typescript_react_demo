import React, { KeyboardEvent } from 'react'
import TextInput from '../../_components/TextInput'

import { useTodos } from "./model";

const Todos = () => {
    const todos = useTodos();

    const onKeyDownHandle = async (value: string, event: KeyboardEvent) => {
        console.log(event.keyCode)
        if (event.keyCode === 13) {
            await todos.addTodo(value)
            console.log(todos.all())
        }
    }

    return (
        <>
            <TextInput
                onKeyDown={onKeyDownHandle} />
            { todos.all().map(todo => <li key={todo.id}>{todo.text}</li>) }
        </>
    )
}

export default Todos