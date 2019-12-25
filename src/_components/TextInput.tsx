import React, { FC, KeyboardEvent, ChangeEvent, useState } from 'react'

interface ITextInput {
    onKeyDown: (value: string, event: KeyboardEvent) => void
}

const TextInput:FC<ITextInput> = ({ onKeyDown }) => {
    const [inputValue, setInputValue] = useState<string>("")
    return (
        <>
            <input
                value={inputValue} 
                onChange={(e:ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} 
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => onKeyDown(inputValue, e)}
                placeholder="请输入待完成事项"></input>
        </>
    )
}

export default TextInput