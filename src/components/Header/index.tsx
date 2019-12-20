import React, { FormEvent, FC } from 'react'
import { RootState, RootDispatch } from '../../store'
import { setInputValue, asyncAddTodo } from '../../store/actions'
import { connect, ConnectedProps } from 'react-redux'
import Filter from './Filter'

const Header:FC<Props> = ({ inputValue, onChange, onKeyDown }) => {
    return (
        <>
            <input value={inputValue} onChange={onChange} onKeyDown={(e: any) => onKeyDown(inputValue, e)} placeholder="请输入待完成事项"></input>
            <Filter />
        </>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        inputValue: state.input
    }
}

const mapDispatchToProps = (dispatch: RootDispatch) => {
    return {
        onChange: (e: FormEvent<HTMLInputElement>) => {
            dispatch(setInputValue(e.currentTarget.value))
        },
        onKeyDown: (value: string, e: KeyboardEvent) => {
            if (e.keyCode === 13) {
                if (value) {
                    dispatch(asyncAddTodo(value) as any)
                    dispatch(setInputValue(""))
                }
            }
        }
    }
}

const connetor = connect(mapStateToProps, mapDispatchToProps)
type Props = ConnectedProps<typeof connetor>



export default connetor(Header)
