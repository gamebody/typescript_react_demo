/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react'
import { Filter as FilterType } from '../store/actions'

type Props = {
    onClick: (filter: FilterType) => void
}

let Filter:FC<Props> = ({ onClick }) => {
    const [filter, setFilter] = useState<FilterType>('SHOW_ALL')

    const clickHandler = (filter: FilterType) => {
        setFilter(filter)
        onClick(filter)
    }
    return (
        <div>
            { filter === 'SHOW_ALL' ? 
                '全部' : 
                <a href="#" onClick={() => clickHandler('SHOW_ALL')}>全部</a> }，
            { filter === 'SHOW_COMPLETED' ?
                '已完成' :
                <a href="#" onClick={() => clickHandler('SHOW_COMPLETED')}>已完成</a> }，
            { filter === 'SHOW_ACTIVE' ? 
                '未完成' : 
                <a href="#" onClick={() => clickHandler('SHOW_ACTIVE')}>未完成</a> }，
        </div>
    )
}

export default Filter