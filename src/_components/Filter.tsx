import React, { FC } from 'react'
import { Filter as FilterType } from '../store/actions'

type Props = {
    filter: FilterType,
    onClick: (filter: FilterType) => void
}

let Filter:FC<Props> = ({ filter, onClick }) => {
    return (
        <div>
            { filter === 'SHOW_ALL' ? 
                '全部' : 
                <span onClick={() => onClick('SHOW_ALL')}>全部</span> }，
            { filter === 'SHOW_COMPLETED' ?
                '已完成' :
                <span onClick={() => onClick('SHOW_COMPLETED')}>已完成</span> }，
            { filter === 'SHOW_ACTIVE' ? 
                '未完成' : 
                <span onClick={() => onClick('SHOW_ACTIVE')}>未完成</span> }，
        </div>
    )
}

export default Filter